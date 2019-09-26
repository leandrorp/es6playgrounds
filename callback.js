function comeToWorld(user, finishUser) {
    console.log(`${user} born in this world.`);
    finishUser(user);
}

function finishUser(user){
    console.log(`${user} has passed to another world`);
}

comeToWorld('Leandro', finishUser);