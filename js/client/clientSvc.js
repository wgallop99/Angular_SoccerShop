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

      var deleteCart = function(prod) {
        return $http.delete(cartUrl + "/" + prod._id, prod).then(function (response) {
              console.log(response);
              $rootScope.$broadcast("item:deleted");
              $log.info("item:deleted");
          })
      };

       var addReview = function(prod) {

          $http.put(prods + "/" + prod._id, prod).success(function(data) {

          $rootScope.$broadcast("review:edited");
          $log.info("review:edited");

        });

      };


      return {
        addCart: addCart,
        getCart: getCart,
        getProds: getProds,
        deleteCart: deleteCart,
        singleProd: singleProd,
        addReview: addReview
      };

  });
