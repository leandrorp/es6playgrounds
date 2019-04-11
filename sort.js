let brandComputers = ["apple","windows","compaq"];

let mix = brandComputers.sort().reverse();


console.log(mix);


let family = [
    { name : "Leandro", age : 34 },
    { name : "Fatima", age : 63 }
]

let familyOrdering = family.sort(function(a,b){
            return a.age - b.age
});

console.log(familyOrdering);