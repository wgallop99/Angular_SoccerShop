angular.module("app.directives", [])
  .directive("userDirective", function () {
    return {
      restrict: "EA",
      scope:  {
        title: "@",
        brand: "@",
        image: "@",
        price: "@",
        description: "@",
        review: "@"
      },
      templateUrl: "views/userDirective.html"
    };
  })

    .directive("cartDirective", function () {
      return {
        restrict: "EA",
        scope:  {
          title: "@",
          brand: "@",
          image: "@",
          price: "@",
          description: "@",
          review: "@"
        },
        templateUrl: "views/cartDirective.html"
      };
  });
