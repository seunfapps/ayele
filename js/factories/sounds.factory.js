/// <reference path="../angular/angular.min.js" />
/// <reference path="../app.module.js" />

myApp.factory("SoundsFactory", function ($http) {
    return {
        get: function() {
            return $http.get(rootUrl("data/sounds.json"));
        }
    }
});