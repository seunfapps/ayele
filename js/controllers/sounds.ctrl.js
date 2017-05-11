myApp.controller('ctrl', function ($scope) {
    $scope.playlists = [
        {
            name: 'aye le',
            url: 'audio/ayele.mp3'
        },
        {
            name: 'chai',
            url: 'audio/chai.mp3'
        }, {
            name: 'apostle',
            url: 'audio/apostle.mp3'
        }, {
            name: 'jiya',
            url: 'audio/jiya.mp3'
        }, {
            name: 'lord',
            url: 'audio/lord.mp3'
        }, {
            name: 'funke',
            url: 'audio/funke.mp3'
        },
        {
            name: 'aye mi',
            url: 'audio/ayemi.mp3'
        },
        {
            name: 'pregnant',
            url: 'audio/pregnant.mp3'
        },
        {
            name: 'jesu',
            url: 'audio/jesu.mp3'
        },
        {
            name: 'o ja mi lara',
            url: 'audio/jamilaraje.mp3'
        },
        {
            name: 'whollup',
            url: 'audio/whollup.mp3'
        },
        {
            name: 'gerrarhia',
            url: 'audio/gerrarhia.mp3'
        },
        {
            name: 'whip',
            url: 'audio/whip.mp3'
        }
    ];

    $scope.play = function (url) {
        var audio = new Audio(url);
        audio.play();
    };
});