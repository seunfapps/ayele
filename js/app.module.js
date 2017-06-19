/// <reference path="config.js" />

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('featured-memes', {
            url: '/',
            templateUrl: rootUrl('partials/featured-memes.html')
        })
        .state('my-memes', {
            url: '/my-memes',
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