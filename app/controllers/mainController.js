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
        //$scope.location.path('/dfdfdf')
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

        $scope.loadActivity  = function($scope){
            console.log("ROOOOOOOCCCCKK")
            $location.path('/page1');
        }

    }]);

komControllers.controller('ActivitySegmentCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        /*
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
            content: 'Hello, World!',
            title: 'Title'
        };
        */
        $scope.segment = 'yes'

    }]);
