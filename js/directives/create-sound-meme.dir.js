/// <reference path="../angular/angular.min.js" />
/// <reference path="../app.module.js" />
/// <reference path="../config.js" />

myApp.directive("createSoundMeme", function (StorFactory, FileSystemFactory) {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            $element.submit(function (ev) {
                ev.preventDefault();
                $scope.newSound.file = 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                }) + ".mp3";
                if ($scope.newSound.data) {
                    FileSystemFactory.request(FileSystemFactory.grantedBytes).then(function (fs) {
                        var blob = FileSystemFactory.convertToBlob($scope.newSound.data);
                        console.log(blob);
                        FileSystemFactory.writeFile($scope.newSound.file, blob).then(function (fileEntry) {
                            angular.element("[ui-sref='my-memes']").notify($scope.newSound.file + " saved successfully", { position: "bottom right", className: "success" });
                            var url = $scope.newSound.data.toString();
                            var existingMemes = StorFactory.get("my-memes") || [];
                            delete $scope.newSound.data;
                            delete $scope.newSound.fileName;
                            delete $scope.newSound.blob;
                            existingMemes.push($scope.newSound);
                            $scope.newSound.url = url;
                            StorFactory.add("my-memes", existingMemes);
                            $scope.$emit("new-sound-created", $scope.newSound);
                            angular.element("[ui-sref='my-memes']").notify("New Audio meme '" + $scope.newSound.title + "' saved locally", { position: "bottom right", className: "success" });
                            $scope.newSound = {
                                data: null,
                                title: "",
                                image: "img/grinningface.png",
                                fileName: "Add your audio meme ..."
                            }
                            //$scope.info = new PersonalInfo();
                            $scope.$applyAsync();
                        })
                    });
                }
            });
        }
    }
});

function toMp3Blob(base64) {
    var byteChars = atob(base64.substring(base64.indexOf(',') + 1));
    var byteArr = new Uint8Array(byteChars.split('').map(function (char) { return char.charCodeAt(0) }));
    return new Blob(byteArr, { type: "audio/mp3" });
}