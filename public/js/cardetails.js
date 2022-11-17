// const loc = require('list-of-cars')
//  var fullList = loc.getListSync()

//  console.log(loc.getCarMakes());
// // console.log(loc.getCarCategories());
//console.log(loc.getCarsByMakeObj());
// // console.log(loc.getCarsByCategoryObj());


// function getMakes(){
//     var carMakes = loc.getCarMakes();
//     const select = document.getElementById("#car-make");
//     for (var i=0; i<carMakes.length; i++){
//         var option = document.createElement("option");
//         option.setAttribute("value", carMakes[i]);
//         option.textContent = carMakes[i];
//         //append option the the select with id car-make
//         select.append(option)
//     }
// };



// module.exports = getMakes;


function apiCall(){
    fetch()
    .then((response)=>{
        if(!response.ok){
            throw new Error(`${response.Error}`);
        }
        return response
    })
};

function getMakes(carMakes){
    const select = document.getElementById("#car-make");
    for (var i=0; i<carMakes.length; i++){
        var option = document.createElement("option");
        option.setAttribute("value", carMakes[i]);
        option.textContent = carMakes[i];
        select.append(option);
    }
};
//getMakes();
module.exports = getMakes;