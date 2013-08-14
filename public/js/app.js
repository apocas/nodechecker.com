'use strict';

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
google.load('visualization', '1', {packages: ['corechart']});

angular.module('myApp', ['googlechart.directives', 'ngSanitize']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/main',
        controller: StatsCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);