// --------------------------------------------------------------------------------------
// IMPORT'S
// --------------------------------------------------------------------------------------
import { _players } from "../constants/players.js";
import _utilsFunc from './utils.js';

/**************************************************************************************
// @LuisStarlino |  16/11/2024  16"30
// --- The simulator's main function.
// --- This function willl be called when the project runs and will start the race!
/***************************************************************************************/
async function main() {

    //TODO: GET TWO PLAYES
    console.log("\n****🏎️  Mario Kart Simulator ****");
    console.log("*** 🏴󠁳󠁣󠀰󠀴󠁿 Starting a new Race! ***");
    console.log("*** PLAYERS: Mario X Luigi");

    await playRaceEngine(_players[0], _players[1]);
}


// --------------------------------------------INICIO-------------------------------------------
// @Luis Starlino 17/11/2024 | 09"25
// --- Race Engine
// ---------------------------------------------------------------------------------------------
async function playRaceEngine(player1, player2) {

    // --- 5 Rounds/Runs
    for (let round = 1; round <= 5; round++) {

        // --- R1: Get the sorted block/track
        let block = await _utilsFunc.getRandomBLock();

        // --- R2: Rolling the dice
        let dicePlayer1 = await _utilsFunc.rollDice();
        let dicePlayer2 = await _utilsFunc.rollDice();

        // --- R3: Skills  players
        let totalSkillsPlayer1 = 0
        let totalSkillsPlayer2 = 0
        



        // --- Show to user
        console.log("\n*************************");
        console.log(`🏁 Round ${round}`);
        console.log(`🏁 Track ${block}`);

        
    }

}


export default {
    main
}