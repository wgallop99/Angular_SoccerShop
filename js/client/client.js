angular.module("clientSide",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider

        .when("/prod", {
            templateUrl: "views/client/client.html",
            controller: "clientCtrl"
        })

        .when("/prod/cart", {
          templateUrl: "views/client/cart.html"
          controller: "clientCtrl"
        })

        .when("/prod/:id", {
          templateUrl: "views/client/id.html",
          controller: "clientCtrl"
        })

  });
