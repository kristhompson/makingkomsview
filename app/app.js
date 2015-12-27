'use strict';
var komApp = angular.module('komApp', [
  'ngRoute',
  'komControllers',
  'ui.bootstrap'
]);

komApp.config(['$httpProvider', function($httpProvider) {

  // needed for cors crap
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

komApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/athlete', {
      templateUrl: 'partials/athleteDetails.html',
      controller: 'AthleteCtrl'
    }).
    when('/activities', {
      templateUrl: 'partials/activitiesList.html',
      controller: 'ActivitiesCtrl'
    }).

    when('/activitySegments/:activityId', {
      templateUrl: 'partials/activitySegment.html',
      controller: 'ActivitySegmentCtrl'
    }).
    when('/segments/:segmentId', {
      templateUrl: 'partials/segmentLeaderboard.html',
      controller: 'SegmentCtrl'
    }).
    otherwise({
      redirectTo: '/activities'
    });
  }]);
