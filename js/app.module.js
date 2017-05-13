var myApp = angular.module('myApp', []).config([
  '$compileProvider',
  function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|file|tel):/);
      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|file|tel):/); //important for chrome-extension
  }
]);