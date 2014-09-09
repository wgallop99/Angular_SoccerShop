angular.module("feature")
    .factory("featureSvc", function ($rootScope, $log) {
        var prods = [
            {
                title: "Predator",
                brand: "adidas",
                image: "http://www.soccercorner.com/v/vspfiles/photos/SMYADV21082-2.jpg",
                price: "$200",
                description: "David Beckham's cleat of choice"
            },
            {
              title: "Total 90 Laser",
              brand: "Nike",
              image: "http://www.soccerfans.com/images/_full/NIK_10206_F.jpeg",
              price: "$150",
              description: "My personal favorite"              
            }
        ];

        var getProds = function(){
          return prods;
        };

        var addProd = function (newProd) {
          prods.push(newProd);
        };

        var deleteProd = function(index) {
          prods.splice(index);
        };

        var editProd = function (idx, prod) {
          prods[idx] = prod;
        }

        var findIndex = function (idx) {
          return prods[idx];
        }

        return {
          getProds: getProds,
          findIndex: findIndex,
          addProd: addProd,
          deleteProd: deleteProd,
          editProd: editProd
        };
    });
