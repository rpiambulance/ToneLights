var page = angular.module('tone_lights', []);

//MAIN CONTROLLER FOR THE PAGE. COULD DEFINE OTHERS IF NEEDED

page.controller('PageCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.emergency = function() {
        var url = "/emergency";
        console.log("Activated button emergency");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.standby = function() {
        var url = "/standby";
        console.log("Activated button standby");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.lightsOn = function() {
        var url = "/on";
        console.log("Activated button on");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.white50 = function() {
        var url = "/white50";
        console.log("Activated button 50");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.dimWhite = function() {
        var url = "/dimWhite";
        console.log("Activated button dim");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.WW = function() {
        var url = "/WW";
        console.log("Activated button warm white");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.red = function() {
        var url = "/red";
        console.log("Activated button red");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.blue = function() {
        var url = "/blue";
        console.log("Activated button blue");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.purple = function() {
        var url = "/purple";
        console.log("Activated button purple");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.rednight = function() {
        var url = "/rednight";
        console.log("Activated button red night");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    };

    $scope.bluenight = function() {
        var url = "/bluenight";
        console.log("Activated button blue night");
        $http.get(url).then(function (response) {
            console.log(response);
            if (response){
                return true;
            }
        });
    }

}]);