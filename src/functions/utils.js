async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBLock() {
    let block;
    let random = Math.random();

    switch (true) {
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

async function rollingDiceEngine(playerName, blockType, diceResult, att) {

    console.log(`🎲 Player ${playerName} rolling the dice of ${blockType} | 🎲 Gets: ${diceResult} | 🗒️ Total: ${diceResult} + ${att} = ${diceResult + att}`);
}

async function calcResult(player1, player2) {

    return { player1, player2 }
}

export default {
    rollDice,
    calcResult,
    getRandomBLock,
    rollingDiceEngine
}