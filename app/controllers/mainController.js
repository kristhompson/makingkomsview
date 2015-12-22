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

        //$scope.location = $location;
        console.log($location)
        $http({
            method: 'GET',
            url: 'http://localhost:9000/athleteactivities'
        }).then(function successCallback(response) {
            console.log('worked', response);
            $scope.athleteactivities = response.data
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log('failed', response)
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        $scope.dynamicPopover = {
            content: 'Hellooo, World!',
            title: 'Title'
        };

        $scope.loadActivity  = function(activityId){
            console.log("ROOOOOOOCCCCKK", activityId)
            $location.path('/activitySegments/'+activityId);
            //$location.path('/activitySegment');
        }

    }]);





komControllers.controller('ActivitySegmentCtrl', ['$scope', '$routeParams', '$http',


    //init function
    function($scope, $routeParams, $http) {
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

            $http({
                method: 'GET',
                url: 'http://localhost:9000/segmentLeaderboard/'+ segmentId
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

        }

        $scope.dynamicPopover = {
            content: 'Hello, World!',
            title: 'Title'
        };

        $scope.segment = 'yes'

    }]);
