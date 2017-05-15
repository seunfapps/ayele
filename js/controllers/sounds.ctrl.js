myApp.controller('ctrl', function ($scope) {
    $scope.playlists = [
        {
            name: 'aye le',
            url: 'audio/ayele.mp3',
            img: 'img/cryinglaugh.png'
        },
        {
            name: 'chai',
            url: 'audio/chai.mp3',
            img: 'img/loudcryinglaugh.png'
        }, {
            name: 'apostle',
            url: 'audio/apostle.mp3',
            img: 'img/cryinglaugh.png'
        },
        {
            name: 'super story',
            url: 'audio/superstory.mp3',
            img: 'img/rollingeyes.png'
        }, {
            name: 'jiya',
            url: 'audio/jiya.mp3',
            img: 'img/closedeyelaugh.png'
        }, {
            name: 'jesus is lord',
            url: 'audio/lord.mp3',
            img: 'img/grinningface.png'
        }, {
            name: 'funke',
            url: 'audio/funke.mp3',
            img: 'img/rollingeyes.png'
        },
        {
            name: 'aye mi',
            url: 'audio/ayemi.mp3',
            img: 'img/sadface.png'
        },
        {
            name: 'pregnant',
            url: 'audio/pregnant.mp3',
            img: 'img/pregnant.png'
        },
        {
            name: 'jesu',
            url: 'audio/jesu.mp3',
            img: 'img/church.png'
        },
        {
            name: 'o ja mi lara je',
            url: 'audio/jamilaraje.mp3',
            img: 'img/runningman.png'
        },
        {
            name: 'whollup',
            url: 'audio/whollup.mp3',
            img: 'img/angryface.png'
        },
        {
            name: 'gerrarahia',
            url: 'audio/gerrarhia.mp3',
            img: 'img/rollingeyes.png'
        },
        {
            name: 'whip',
            url: 'audio/whip.mp3',
            img: 'img/sadface.png'
        },
        {
            name: 'ajekun iya',
            url: 'audio/ajekuniya.mp3',
            img: 'img/closedeyelaugh.png'
        },
        {
            name: 'continue',
            url: 'audio/continue.mp3',
            img: 'img/grinningface.png'
        },
        {
            name: 'hexperedit',
            url: 'audio/hexperredit.mp3',
            img: 'img/grinningface.png'
        },
        {
            name: 'daz all',
            url: 'audio/dazall.mp3',
            img: 'img/cryinglaugh.png'
        },
        {
            name: 'oga at the top',
            url: 'audio/ogaatthetop.mp3',
            img: 'img/closedeyelaugh.png'
        },
        {
            name: 'omo re bi custard',
            url: 'audio/omorebicustard.mp3',
            img: 'img/grinningface.png'
        },
        {
            name: 'will you keep quiet',
            url: 'audio/quiet.mp3',
            img: 'img/rollingeyes.png'
        },
        {
            name: 'waka come',
            url: 'audio/wakacome.mp3',
            img: 'img/cryinglaugh.png'
        }
    ];

    $scope.paginatedPlaylists = $scope.playlists.paginate(9);

    $scope.play = function (url) {
        var audio = new Audio(url);
        audio.play();
    };
});