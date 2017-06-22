myApp.controller('ctrl', function ($scope, $http, $state) {
    $scope.playlists = [];
    $scope.$state = $state;
    $scope.play = function (url) {
        var audio = new Audio(url);
        audio.play();
    }

    $http.get(rootUrl("data/sounds.json")).then(function (sounds) {
        if (Array.isArray(sounds.data)) {
            $scope.playlists = sounds.data;
            $scope.playlists.forEach(function (audio) {
                audio.nameUrl = audio.name.replace(/\s+/g, '-').toLowerCase();
                audio.play = function () {
                    if (!audio.elem) {
                        audio.elem = new Audio(audio.url);
                        audio.elem.onended = function () {
                            audio.playing = false;
                            $scope.$applyAsync();
                        }
                    }
                    audio.playing = true;
                    audio.elem.currentTime = 0;
                    audio.elem.play();
                }
            });
            loadAudioFn(location.href);
        }
    }).catch(function (err) {
        console.error("error loading sounds", err);
    })

    var loadAudioFn = function (uriName) {
        $scope.audio = $scope.playlists.find(function (audio) {
            return (uriName || "").endsWith(audio.nameUrl);
        });
        console.log("loaded-audio", $scope.audio, uriName)
    }
    $scope.$on("sound-page-open", function (event, data) {
        console.log(data);
        loadAudioFn(data);
    })
    $scope.rootUrl = rootUrl;
    $scope.encodeUri = encodeURIComponent;
});