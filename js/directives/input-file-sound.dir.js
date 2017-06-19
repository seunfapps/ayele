/// <reference path="../angular/angular.min.js" />
/// <reference path="../app.module.js" />
/// <reference path="../config.js" />

myApp.directive("inputFileSound", function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            var $label = angular.element(this).next('label');

            $element.change(function (ev) {
                var fileName = "new-meme.mp3";
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else if (ev.target.value)
                    fileName = $element[0].value.split('\\').pop();

                var reader = new FileReader();
                reader.onload = function (e) {
                    //console.log(ev);
                    var base64 = e.target.result.substring(e.target.result.indexOf(',') + 1);
                    var byteChars = atob(base64);
                    var byteArr = new Uint8Array(byteChars.split(''));
                    var blob = new Blob(byteArr, { type: "audio/mp3" });
                    $scope.$emit("input-file-sound-loaded", {
                        fileName: fileName,
                        data: e.target.result,
                        blob: blob
                    });
                };
                if ($element[0].files[0].size > 102400) {
                    angular.element("[ui-sref='my-memes']").notify("Audio file should be less than 100KB", { position: "bottom right", className: "error" });
                }
                else reader.readAsDataURL($element[0].files[0]);
            })
        }
    }
});