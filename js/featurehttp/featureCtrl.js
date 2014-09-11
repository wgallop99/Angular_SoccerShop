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
      featureSvc.addProd({
      title: prod.title,
      brand: prod.brand,  
      image: prod.image,
      price: prod.price,
      description: prod.description,
      review: []
      }).then(function () {
        $location.path("/prod/admin");
      });

    };

    $scope.deleteProd = function (prod) {
      featureSvc.deleteProd(prod).then(function () {
        $location.path("/prod/admin");
      });
    };

    $scope.editProd = function (prod) {
      featureSvc.editProd(prod).then(function () {
        $location.path("/prod/admin");
      });
    };

    $scope.goToAdd = function () {
      $location.path("/prod/add");
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
