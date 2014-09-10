angular.module("feature")
    .factory("featureSvc", function ($rootScope, $log) {
        var prods = [
            {
                title: "Predator",
                brand: "adidas",
                image: "http://www.soccerfans.com/images/_full/ADI_10313_F.jpeg",
                price: "200",
                description: "David Beckham's cleat of choice"
            },
            {
              title: "Total 90 Laser",
              brand: "Nike",
              image: "http://www.soccerfans.com/images/_full/NIK_10206_F.jpeg",
              price: "150",
              description: "My personal favorite."
            },
            {
              title: "Vapor",
              brand: "Nike",
              image: "http://i131.photobucket.com/albums/p317/biggskizz/00000-2.jpg",
              price: "250",
              description: "Verrry narrow."
            },
            {
              title: "Legend",
              brand: "Nike",
              image: "http://soccerpro.scene7.com/is/image/soccerpro/366201_136_Nike_Tiempo_Legend_III_FG_set_01",
              price: "200",
              description: "Very comfortable with a wider fit."
            },
            {
            title: "Legend",
            brand: "Nike",
            image: "http://www.comparestoreprices.co.uk/images/ni/nike-football-boots-nike-air-legend-sg-football-boots-black--white.jpg",
            price: "200",
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
          prods.splice(index, 1);
        };

        var editProd = function (idx, prod) {
          prods[idx] = prods;
        };

        var findIndex = function (idx) {
          return prods[idx];
        };

        return {
          getProds: getProds,
          findIndex: findIndex,
          addProd: addProd,
          deleteProd: deleteProd,
          editProd: editProd
        };
    });
