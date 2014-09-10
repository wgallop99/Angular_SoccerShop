angular.module("feature")
    .factory("featureSvc", function ( $rootScope, $log, $http) {

        var prods = "http://tiy-fee-rest.herokuapp.com/collections/willsoccer";

        var getProds = function(){
          return $http.get(prods);
        };

        var singleProd = function(id) {
           return $http.get(prods + "/" + id);
        };

        var createProd = function(prod) {
          return $http.post(prods, prod).then(function (response) {
                $rootScope.$broadcast("prod:added");
                $log.info("prod:added");
            })
        };

        var deleteProd = function(prod) {
          return $http.delete(prods + "/" + prod._id, prod).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("prod:deleted");
                $log.info("prod:deleted");
            })
        };

        var editProd = function(prod) {
          return $http.put(prods + "/" + prod._id, prod).then(function (response) {
                $rootScope.$broadcast("prod:updated");
                $log.info("prod:updated");
            })
        };

        return {
          getProds: getProds,
          singleProd: singleProd,
          addProd: createProd,
          deleteProd: deleteProd,
          editProd: editProd
        };
    });
