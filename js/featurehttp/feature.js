angular.module("feature",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/prod", {
                templateUrl: "views/featurehttp/list.html",
                controller: "featureCtrl"
            })

            .when("/prod/admin", {
              templateUrl: "views/featurehttp/admin.html",
              controller: "featureCtrl"
            })

            .when("/prod/add", {
              templateUrl: "views/featurehttp/create.html",
              controller: "featureCtrl"
            })

            .when("/prod/:id", {
              templateUrl: "views/featurehttp/id.html",
              controller: "featureCtrl"
            })

            .when("/prod/:id/edit", {
              templateUrl: "views/featurehttp/edit.html",
              controller: "featureCtrl"
            })

    });
