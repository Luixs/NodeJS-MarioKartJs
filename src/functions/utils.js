async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBLock(){
    let block;
    let random = Math.random();

    switch(true){
        case random < 0.33:
            block = "Straight";
        break;
        case random < 0.66:
            block = "Bend";
        break;
        default:
            block = "Fight";
    }

    return block;

}

export default {
    rollDice,
    getRandomBLock
}