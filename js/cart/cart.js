angular.module("cartFeature",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/prod/cart", {
                templateUrl: "views/cart/cart.html",
                controller: "cartCtrl"
            })
});
