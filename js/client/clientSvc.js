angular.module("clientSide")
      .factory("clientSvc", function ( $rootScope, $log, $http) {

    var cartUrl = "http://tiy-fee-rest.herokuapp.com/collections/willsoccercart";

      var addCart = function (item) {
        return $http.post(cartUrl, item).then(function (response) {
          $rootScope.$broadcast("item:added");
          $log.info("item:added");
        })
      };

      var getCart = function () {
        return $http.get(cartUrl);
      };

  });
