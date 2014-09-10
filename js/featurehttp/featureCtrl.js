angular.module("feature")
  .controller("featureCtrl", function ($rootScope, $scope, $location, $routeParams, featureSvc) {

    featureSvc.getProds().then(function (prods) {
      console.log(prods)
      $scope.prods = prods.data;
    });

    featureSvc.singleProd($routeParams.id).then(function (response) {
      $scope.singleProd = response.data;
    });

    $scope.addProd = function (prod) {
      featureSvc.addProd(prod).then(function () {
        $location.path("/prod");
      });

    };

    $scope.deleteProd = function (prod) {
      featureSvc.deleteProd(prod).then(function () {
        $location.path("/prod");
      });
    };

    $scope.editProd = function (prod) {
      featureSvc.editProd(prod).then(function () {
        $location.path("/prod");
      });
    };

    $scope.goToAdd = function () {
      $location.path("/prod/add");
    };

    $scope.goToAdmin = function () {
      $location.path("/prod/admin");
    };

    $scope.goToCart = function () {
      $location.path("/prod/cart");
    };

    $rootScope.$on("prod:deleted", function () {
      featureSvc.getProds().then(function (prods) {
        $scope.prods = prods.data;
      });
    })

    $rootScope.$on("prod:updated", function () {
      featureSvc.getProds().then(function (prods) {
        $scope.prods = prods.data;
      });
    })

  });
