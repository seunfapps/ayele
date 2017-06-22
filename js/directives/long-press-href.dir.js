/// <reference path="../angular/angular.min.js" />
/// <reference path="../app.module.js" />
/// <reference path="../config.js" />

myApp.directive("longPressHref", function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            var pressTimer;
            var d;
            var clickEvents = angular.element._data($element.get(0), "events").click.slice(0);
            //console.log(clickEvents);
            $element.off("click");
            $element.mouseup(function (e) {
                clearTimeout(pressTimer);
                if (((new Date()) - d) > 600) {
                    e.preventDefault();
                }
                else {
                    clickEvents.forEach(function (ev) {
                        ev.handler.call($element[0]);
                    });
                }
                return false;
            }).mousedown(function () {
                d = new Date();
                pressTimer = window.setTimeout(function () {
                    //console.log("long-pressed", attrs.longPressHref);
                    if (attrs.longPressHref && attrs.longPressHref != '') {
                        $scope.$emit("sound-page-open", attrs.longPressHref);
                        location.href = attrs.longPressHref;
                    }
                }, 600);
                return false;
            });
        }
    }
});