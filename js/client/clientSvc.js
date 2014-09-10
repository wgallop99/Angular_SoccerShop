angular.module("clientSide")
      .factory("clientSvc", function ( $rootScope, $log, $http) {

    var cartUrl = "http://tiy-fee-rest.herokuapp.com/collections/willsoccercart";
    var prods = "http://tiy-fee-rest.herokuapp.com/collections/willsoccer";

      var getProds = function(){
        return $http.get(prods);
      };

      var singleProd = function(id) {
         return $http.get(prods + "/" + id);
      };

      var addCart = function (item) {
        return $http.post(cartUrl, item).then(function (response) {
          $rootScope.$broadcast("item:added");
          $log.info("item:added");
        })
      };

      var getCart = function () {
        return $http.get(cartUrl);
      };

      var deleteProd = function(prod) {
        return $http.delete(cartUrl + "/" + prod._id, prod).then(function (response) {
              console.log(response);
              $rootScope.$broadcast("prod:deleted");
              $log.info("prod:deleted");
          })
      };

      return {
        addCart: addCart,
        getCart: getCart,
        getProds: getProds,
        singleProd: singleProd
      };

  });
