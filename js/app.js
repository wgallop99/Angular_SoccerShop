 angular.module("mainController",
    [
    "feature",
    "cartFeature",
     "ngRoute"
     ])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});
