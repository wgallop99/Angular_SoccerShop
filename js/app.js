 angular.module("mainController",
    [
    "feature",
    //  "tiy-cookieService",
    //  "tiy-resourceService",
    //  "tiy-restangularService",
    //  "tiy-httpService",
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

angular.module("functionSvc", []);
