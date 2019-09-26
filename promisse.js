
const promisseBot = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Hello Leandro');
    }, 2000);
});

promisseBot.then(function(data) {
    console.log('How are you?');
});

promisseBot.then(function(data) {
    console.log(data);
});

promisseBot.then(function(data) {
    console.log('Im crazy sorry');
});