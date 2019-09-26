const makeMeHappy = async () => {    
    await getMoney();
    console.log('Receiving money');
    return "done"
 }

let getMoney = () => {
    setTimeout(function() {
        console.log('Leandro received his salary');
    }, 2000);
    console.log('OK WAIT!!');
}

makeMeHappy();
console.log('Making money...');