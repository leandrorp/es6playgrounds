//its an state function, keep or maintain the private variables even after his call 
//its called this way, because its an function inside another function, and the children function have acesso to the father variables

function viraMeuParente(...middle){
	var sobrenome = middle + " Pinheiro";
		function comprimentar(name){
            // console.log(sobrenome); //prints because 
          //  console.log("olá !! bem vindo " + name + sobrenome );
            console.log(`Olá bem vindo ${name} ${sobrenome} !! `); // with string interpolation it prettier
    }    
    return comprimentar;
}
var funcaoSimples = viraMeuParente();
var funcaoParametro = viraMeuParente("Rezende");
funcaoSimples("Leandro");
funcaoSimples("Diego");
funcaoParametro("Fatima");

//console.log(sobrenome); // udefined dont have access to this variable
