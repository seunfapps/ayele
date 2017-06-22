/// <reference path="../angular/angular.min.js" />
/// <reference path="../app.module.js" />
/// <reference path="../factories/stor.factory.js" />
/// <reference path="../factories/file-system.factory.js" />

myApp.controller('MyMemesCtrl', function ($scope, $http, StorFactory, FileSystemFactory) {
    $scope.playlists = [];
    $scope.play = function (url) {
        var audio = new Audio(url || $scope.newSound.data);
        audio.onended = function () {
            $scope.newSound.playing = false;
            $scope.$applyAsync();
        }
        audio.play();
        $scope.newSound.playing = true;
    };
    if (!StorFactory.get("my-memes")) {
        StorFactory.add("my-memes", []);
    }
    var audioIndividualPlayFn = function () {
        var self = this;
        this.audioElem = this.audioElem || new Audio(this.url);
        this.audioElem.onended = function () {
            self.playing = false;
            $scope.$applyAsync();
        }
        this.audioElem.play();
        this.playing = true;
    }
    $scope.playlists = StorFactory.get("my-memes") || [];
    $scope.playlists.forEach(function (playlist) {
        FileSystemFactory.request().then(function () {
            FileSystemFactory.readFileDataURL(playlist.file).then(function (dataURL) {
                playlist.url = dataURL;
                playlist.play = function () {
                    audioIndividualPlayFn.call(playlist);
                }
            });
        });
    });
    $scope.newSound = {
        data: null,
        title: "",
        image: "img/grinningface.png",
        fileName: "Add your audio meme ..."
    }
    $scope.$on("input-file-sound-loaded", function (event, obj) {
        $scope.newSound.fileName = obj.fileName;
        $scope.newSound.data = obj.data;
        $scope.newSound.blob = obj.blob;
        $scope.$applyAsync();
        console.log(obj);
    });
    $scope.$on("new-sound-created", function (event, obj) {
        obj.play = function () {
            audioIndividualPlayFn.call(obj);
        }
        $scope.playlists.push(obj);
    });
    $scope.rootUrl = rootUrl;
});