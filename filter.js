var animals = [
    { name : 'cat', type: 'mamifero'},
    { name : 'dog', type: 'mamifero'},
    { name : 'crododilo', type: 'reptil'}
];


const mamiferos = animals.filter(function(animal){
        return animal.type == "reptil";
});

console.log(mamiferos);
