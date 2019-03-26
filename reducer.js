// some all values on the array

var bigNumbers = [12312312,123213232,323232];

const total = bigNumbers.reduce(function(previous, bigNumber){
        return previous + bigNumber;
},0);

console.log(total);