angular.module("cartFeature")
  .factory("cartSvc", function ( $rootScope, $log, $http){

    var cart = "http://tiy-fee-rest.herokuapp.com/collections/willsoccercart";

      var getCart = function(){
        return $http.get(cart);
      };

      var createCart = function(item) {
        return $http.post(cart, item).then(function (response) {
              $rootScope.$broadcast("item:added");
              $log.info("item:added");
          })
      };

      var deleteCart = function(item) {
        return $http.delete(cart + "/" + item._id, item).then(function (response) {
              $rootScope.$broadcast("item:deleted");
              $log.info("item:deleted");
          })
      };

      var editCart = function(prod) {
        return $http.put(cart + "/" + item._id, item).then(function (response) {
              $rootScope.$broadcast("item:updated");
              $log.info("item:updated");
          })
      };

      return {
        getCart: getCart,
        addCart: createCart,
        deleteCart: deleteCart,
        editCart: editCart
      };

  });
