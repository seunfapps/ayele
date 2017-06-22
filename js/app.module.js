/// <reference path="config.js" />

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
    //$locationProvider.html5Mode(true);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|whatsapp):/);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('featured-memes', {
            url: '/',
            templateUrl: rootUrl('partials/featured-memes.html')
        })
        .state('featured-meme', {
            url: '/:memeTitle',
            templateUrl: rootUrl('partials/featured-meme.html')
        })
        .state('my-memes', {
            url: '/my-memes',
            controller: 'MyMemesCtrl',
            templateUrl: rootUrl('partials/my-memes.html')
        });

});

myApp.run(function ($templateCache, $http) {
    var templates = [
        rootUrl('partials/featured-memes.html'),
        rootUrl('partials/my-memes.html')
    ];
    templates.forEach(function (templateUrl) {
        $http.get(templateUrl).then(function (response) {
            $templateCache.put(templateUrl, response.data);
        }).catch(errorHandler);
    });
})