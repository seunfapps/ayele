// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ctrlAyele', function ($scope) {
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
        }, {
            name: 'jiya',
            url: 'audio/jiya.mp3',
            img: 'img/closedeyelaugh.png'
        }, {
            name: 'lord',
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
            name: 'o ja mi lara',
            url: 'audio/jamilaraje.mp3',
            img: 'img/runningman.png'
        },
        {
            name: 'whollup',
            url: 'audio/whollup.mp3',
            img: 'img/angryface.png'
        },
        {
            name: 'gerrarhia',
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
            name: 'ww dot',
            url: 'audio/nscdc.mp3',
            img: 'img/cryinglaugh.png'
        },
        {
            name: 'oga at the top',
            url: 'audio/ogaatthetop.mp3',
            img: 'img/closedeyelaugh.png'
        },
        {
            name: 'omo re',
            url: 'audio/omorebicustard.mp3',
            img: 'img/grinningface.png'
        },
        {
            name: 'wi you keep quiet',
            url: 'audio/quiet.mp3',
            img: 'img/rollingeyes.png'
        },
        {
            name: 'waka come',
            url: 'audio/wakacome.mp3',
            img: 'img/cryinglaugh.png'
        },
    ];

    $scope.play = function (url) {
        var audio = new Audio(url);
        audio.play();
    };
});
