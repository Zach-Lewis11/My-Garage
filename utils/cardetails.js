// const loc = require('list-of-cars')
//  var fullList = loc.getListSync()

//  console.log(loc.getCarMakes());
// // console.log(loc.getCarCategories());
// console.log(loc.getCarsByMakeObj());
// // console.log(loc.getCarsByCategoryObj());


function getMakes(carMakes){

    for (var i=0; i<carMakes.length; i++){
        var option = document.createElement("option");
        option.setAttribute("value", carMakes[i]);
        option.textContent = carMakes[i];
    }
};

module.exports = getMakes;
