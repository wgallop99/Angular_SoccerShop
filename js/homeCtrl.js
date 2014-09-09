angular.module("mainController")
    .controller("homeCtrl", function ($scope, $log, $location) {
        $scope.greeting = "Angular Services Demo";
        $log.info("home view loaded");

        $scope.goToList = function() {
          $location.path("/prod");
        };
    });
