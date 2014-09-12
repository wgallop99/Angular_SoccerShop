angular.module("clientSide")
  .controller("clientCtrl", function ($rootScope, $scope, $location, $routeParams, clientSvc) {


//user list functions

    clientSvc.getProds().then(function (prods) {
      console.log(prods)
      $scope.prods = prods.data;
    });

//view more route functions

    clientSvc.singleProd($routeParams.id).then(function (response) {
      $scope.singleProd = response.data;
      console.log(response);
    });

// Cart CRUD functions including main user page

    $scope.cartTotal = 0;

    clientSvc.getCart().then(function (cartUrl) {
      $scope.cartUrl = cartUrl.data;
      for (var i = 0; i < cartUrl.data.length; i++) {
        $scope.cartTotal += (cartUrl.data[i].price * cartUrl.data[i].quantity);
      };
    });

    $scope.addCart = function(item) {
      var newItem = {
        title: item.title,
        brand: item.brand,
        image: item.image,
        price: item.price,
        description: item.description,
        quantity: 1
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

    $scope.editCart = function (item) {
      clientSvc.editCart(item).then(function () {
        $location.path("/user/cart");
      });
    };

// Function adding reviews to view more page

    $scope.addReview = function(review) {

      clientSvc.singleProd($routeParams.id).success(function(item) {

        $scope.singleProd = item;
        $scope.singleProd.review.push({

          author: review.author,
          description: review.description,
          date: new Date()

        });

        clientSvc.addReview(item);

      });

      $scope.review = {};

    };

// Functions to change routes

    $scope.goToAdmin = function () {
      $location.path("/prod/admin");
    };

    $scope.goToCart = function () {
      $location.path("/user/cart");
    };

    $scope.goToShow = function (item) {
      $location.path("/user/{{item._id}}/");
    };

// Item deleted listener

    $rootScope.$on("item:deleted", function () {
      clientSvc.getCart().then(function (cartUrl) {
        $scope.cartUrl = cartUrl.data;
      });
    });

    $rootScope.$on("item:updated", function () {
      clientSvc.getCart().then(function (cartUrl) {
          $scope.cartUrl = cartUrl.data;
      });
    })

  });
