//what is scope? what is gonna print?

var globalVar = 'globalVar';


function testScope(){
    var insiderVar = 'insiderVar';
    return insiderVar;
}

console.log(globalVar); //prints global var
console.log(testScope()); //access the insideVar and prints it
console.log(insiderVar); //undefined because its not exist in this scope

