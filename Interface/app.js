var page = angular.module('tone_lights', []);

//MAIN CONTROLLER FOR THE PAGE. COULD DEFINE OTHERS IF NEEDED

page.controller('PageCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.emergency = function() {
        var url = "/emergency";
        console.log("here");
        $http.get(url).then(function (response) {

            console.log(response);

        });
    }

    $scope.standby = function() {
        var url = "/standby";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.on = function() {
        var url = "/on";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.white50 = function() {
        var url = "/white50";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.dimWhite = function() {
        var url = "/dimWhite";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.ww = function() {
        var url = "/WW";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.red = function() {
        var url = "/red";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.blue = function() {
        var url = "/blue";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.purple = function() {
        var url = "/purple";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.rednight = function() {
        var url = "/rednight";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

    $scope.bluenight = function() {
        var url = "/bluenight";
        $http.get(url).then(function (response) {
            console.log(response);

        });
    }

}]);
