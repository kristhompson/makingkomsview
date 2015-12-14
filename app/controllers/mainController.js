'use strict';

/* Controllers */

var komControllers = angular.module('komControllers', []);

komControllers.controller('AthleteCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        

        $http({
            method: 'GET',
            url: 'http://localhost:9000/athlete'
        }).then(function successCallback(response) {
            console.log('worked', response)
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log('failed', response)
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

        $scope.orderProp = 'age';
    }]);

komControllers.controller('ActivitiesCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        /*
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
        */
    }]);
