angular.module("clientSide",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider

        .when("/user", {
          templateUrl: "views/client/client.html",
          controller: "clientCtrl"
        })

        .when("/user/cart", {
          templateUrl: "views/client/cart.html",
          controller: "clientCtrl"
        })

        .when("/user/:id", {
          templateUrl: "views/client/id.html",
          controller: "clientCtrl"
        })

  });
