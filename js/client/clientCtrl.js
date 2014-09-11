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
      var newItem = {
        title: item.title,
        brand: item.brand,
        image: item.image,
        price: item.price,
        description: item.description,
      };
      clientSvc.addCart(newItem).then(function () {
        $location.path("/user");
      })
    };

    $scope.deleteCart = function (item) {
      clientSvc.deleteCart(item).then(function () {
        $location.path("/user/cart")
      })
    };

    $scope.goToAdmin = function () {
      $location.path("/prod/admin");
    };

    $scope.goToCart = function () {
      $location.path("/user/cart");
    };

    $scope.goToShow = function () {
      $location.path("/user/{{item._id}}/");
    };

    $rootScope.$on("item:deleted", function () {
      clientSvc.getCart().then(function (cartUrl) {
        $scope.cartUrl = cartUrl.data;
      });
    });

  });
