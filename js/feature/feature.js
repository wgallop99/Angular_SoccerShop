angular.module("feature",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/prod", {
                templateUrl: "views/feature/list.html",
                controller: "featureCtrl"
            })

            .when("/prod/add", {
              templateUrl: "views/feature/create.html",
              controller: "featureCtrl"
            })

            .when("/prod/:id/edit", {
              templateUrl: "views/feature/edit.html",
              controller: "featureCtrl"
            })

    });
