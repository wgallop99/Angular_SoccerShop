angular.module("clientSide")
  .controller("clientCtrl", function ($rootScope, $scope, $location, $routeParams, clientSvc, featureSvc) {


    featureSvc.getCart().then(function (cartUrl) {
      $scope.cartUrl = cartUrl.data;
    });

    $scope.addCart = function(item) {
      featureSvc.addCart(item).then(function () {
        $location.path("/prod")
      })
    };

  });
