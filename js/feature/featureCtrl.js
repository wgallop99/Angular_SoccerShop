angular.module("feature")
  .controller("featureCtrl", function ($rootScope, $scope, $location, $routeParams, featureSvc) {

    $scope.prods = featureSvc.getProds();

    $scope.goToAdd = function () {
      $location.path("/prod/add");
    };

    $scope.singleProd = featureSvc.findIndex($routeParams.id);

    $scope.addProd = function (newProd) {
      featureSvc.addProd(newProd);

      $location.path("/prod");
    };

    $scope.removeProd = function (idx) {
      featureSvc.deleteProd(idx);
    };

    $scope.editProd = function (idx, prod) {
      featureSvc.editProd(idx, prod);

      $location.path("/prod");
    };

  });
