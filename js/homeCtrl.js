angular.module("mainController")
    .controller("homeCtrl", function ($scope, $log, $location) {;

        $scope.goToList = function() {
          $location.path("/user");
        };
    });
