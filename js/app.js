 angular.module("mainController",
    [
    "clientSide",
    "feature",
     "ngRoute",
     "app.directives"
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
