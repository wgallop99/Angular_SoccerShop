angular.module("cartFeature")
  .controller("cartCtrl", function ($rootScope, $scope, $location, $routeParams, featureSvc, cartSvc) {

    cartSvc.getCart().then(function (prods) {
      console.log(cart);
      $scope.cart = cart.data;
    });

    $scope.addCart = function (prod) {
      cartSvc.addCart(prod).then(function () {
        $location.path("/prod/cart");
      });

    };

    $scope.deleteProd = function (prod) {
      cartSvc.deleteProd(prod).then(function () {
        $location.path("/prod/cart");
      });
    };

    $scope.editCart = function (prod) {
      cartSvc.editCart(prod).then(function () {
        $location.path("/prod/cart");
      });
    };

    $rootScope.$on("cart:deleted", function () {
      cartSvc.getCart().then(function (cart) {
        $scope.cart = cart.data;
      });
    })

    $rootScope.$on("cart:updated", function () {
      cartSvc.getCart().then(function (cart) {
        $scope.cart = cart.data;
      });
    })

  });
