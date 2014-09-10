angular.module("clientSide")
  .controller("clientCtrl", function ($rootScope, $scope, $location, $routeParams, clientSvc) {

    clientSvc.getProds().then(function (prods) {
      console.log(prods)
      $scope.prods = prods.data;
    });

    clientSvc.singleProd($routeParams.id).then(function (response) {
      $scope.singleProd = response.data;
    });

    clientSvc.getCart().then(function (cartUrl) {
      $scope.cartUrl = cartUrl.data;
    });

    $scope.addCart = function(item) {
      clientSvc.addCart(item).then(function () {
        $location.path("/prod")
      })
    };

    $scope.goToAdmin = function () {
      $location.path("/prod/admin");
    };

    $scope.goToCart = function () {
      $location.path("/user/cart");
    };

  });
