'use strict';
var phonecatApp = angular.module('komApp', [
  'ngRoute',
  'komControllers'
]);

phonecatApp.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/athlete', {
      templateUrl: 'partials/athleteDetails.html',
      controller: 'AthleteCtrl'
    }).
    when('/activities', {
      templateUrl: 'partials/phone-detail.html',
      controller: 'ActivitiesCtrl'
    }).
    otherwise({
      redirectTo: '/athlete'
    });
  }]);
