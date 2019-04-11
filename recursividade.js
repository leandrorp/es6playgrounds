

function contador(min,max){

    while(min < max){
        console.log(min);
        min++;

    }

}

contador(0,10);

function fatorial(n){
        if(n == 1){
            return 1
        }
        return n * fatorial(n-1)
}

console.log(fatorial(5));