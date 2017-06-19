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
            })
        }
    }).catch(function (err) {
        console.error("error loading sounds", err);
    })
});