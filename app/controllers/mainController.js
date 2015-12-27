'use strict';

/* Controllers */

var komControllers = angular.module('komControllers', []);


komControllers.controller('AthleteCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        

        $http({
            method: 'GET',
            url: 'http://localhost:9000/athlete'
        }).then(function successCallback(response) {
            console.log('worked', response);
            $scope.athlete = response.data
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log('failed', response)
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

        $scope.dynamicPopover = {
            content: 'Hello, World!',
            title: 'Title'
        };
    }]);




komControllers.controller('ActivitiesCtrl', ['$scope', '$routeParams', '$http', '$location',
    function($scope, $routeParams, $http, $location) {

        $scope.title = 'Activity Listing';

        $http({
            method: 'GET',
            url: 'http://localhost:9000/athleteactivities'
        }).then(function successCallback(response) {
            $scope.athleteactivities = response.data
        }, function errorCallback(response) {
            console.log('failed', response)
        });

        $scope.dynamicPopover = {
            content: 'Hellooo, World!',
            title: 'Title'
        };

        $scope.loadActivity  = function(activityId){
            $location.path('/activitySegments/'+activityId);
            //$location.path('/activitySegment');
        }

    }

]);





komControllers.controller('ActivitySegmentCtrl', ['$scope', '$routeParams', '$http', '$location',


    //init function
    function($scope, $routeParams, $http, $location) {
        console.log('in the activity segment controller', $routeParams.activityId)

        $http({
            method: 'GET',
            url: 'http://localhost:9000/activityDetails/'+ $routeParams.activityId
        }).then(function successCallback(response) {
            console.log('worked, got activity', response);
            $scope.activityDetails = response.data
            $scope.segments = response.data.segment_efforts
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log('failed', response)
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


        $scope.loadLeaderboard  = function(segmentId){
            console.log("SSEEEEGGGGG", segmentId)

            $location.path('/segments/'+segmentId);

        }


        $scope.dynamicPopover = {
            content: 'Hello, World!',
            title: 'Title'
        };

        $scope.segment = 'yes'



    }
]);



komControllers.controller('SegmentCtrl', ['$scope', '$routeParams', '$http', '$location',
    function($scope, $routeParams, $http, $location) {

        $scope.segmentId = $routeParams.segmentId;
        $scope.following = JSON.parse($routeParams.following);
        console.log('following is ',$scope.following)



        $http({
            method: 'GET',
            url: 'http://localhost:9000/segmentLeaderboard/'+ $routeParams.segmentId+'?following='+$scope.following
        }).then(function successCallback(response) {
            console.log('worked, got segment leaderboard', response);
            $scope.segmentLeaderboard = response.data
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log('failed', response)
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });



    }]);
