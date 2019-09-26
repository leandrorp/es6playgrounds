// Spread operator examplesss letsssssss goooooooooooooooooooo

//concating begining and end of an array

let arrayAges = [13,23,63,132];

let moreAgesFinalArray = [12,232,...arrayAges];
let moreAgesBeginningArray = [...arrayAges, 12,35,23]

console.log("moreAgesFinalArray" + moreAgesFinalArray);
console.log("moreAgesBeginigArray" + moreAgesBeginigArray);


//receving multiple values on a function

const sumAll = function sumAll(...numbers){
    return numbers.reduce(function(prev, num){
        return prev+ num
    },0);
};

console.log(sumAll(1,2,3));