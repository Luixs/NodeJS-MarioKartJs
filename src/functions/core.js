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

        // --- R4: Apply Roles
        if (block.toLocaleLowerCase() == "straight") {
            totalSkillsPlayer1 = dicePlayer1 + player1?.speed;
            totalSkillsPlayer2 = dicePlayer2 + player2?.speed;

            await _utilsFunc.rollingDiceEngine(player1?.name, block, dicePlayer1, player1?.speed);
            await _utilsFunc.rollingDiceEngine(player2?.name, block, dicePlayer2, player2?.speed);

        } else if (block.toLocaleLowerCase() == "bend") {
            totalSkillsPlayer1 = dicePlayer1 + player1?.drift;
            totalSkillsPlayer2 = dicePlayer2 + player2?.drift;

            await _utilsFunc.rollingDiceEngine(player1?.name, block, dicePlayer1, player1?.drift);
            await _utilsFunc.rollingDiceEngine(player2?.name, block, dicePlayer2, player2?.drift);
        } else { // -- Fight
            totalSkillsPlayer1 = dicePlayer1 + player1?.power;
            totalSkillsPlayer2 = dicePlayer2 + player2?.power;

            await _utilsFunc.rollingDiceEngine(player1?.name, block, dicePlayer1, player1?.power);
            await _utilsFunc.rollingDiceEngine(player2?.name, block, dicePlayer2, player2?.power);

            player2 = { ...player2, points: totalSkillsPlayer1 > totalSkillsPlayer2 && player2?.points > 0 ? player2?.points - 1 : player2?.points };
            player1 = { ...player1, points: totalSkillsPlayer2 > totalSkillsPlayer1 && player1?.points > 0 ? player1?.points - 1 : player1?.points }

            if (totalSkillsPlayer1 == totalSkillsPlayer2) console.log("Both had the same Result!");

        }


        // CHECK WINNER
        if (totalSkillsPlayer1 > totalSkillsPlayer2 && block.toLocaleLowerCase() !== "fight") {
            console.log(`✅ Player 1 Winner the Round!`);
            player1 = { ...player1, points: player1?.points + 1 };
        } else if (totalSkillsPlayer2 > totalSkillsPlayer1 && block.toLocaleLowerCase() !== "fight") {
            console.log(`✅ Player 2 Winner the Round` );
            player2 = { ...player2, points: player2?.points + 1 };
        }
    }

    await declareWinner(player1, player2)
}

// --------------------------------------------INICIO-------------------------------------------
// @Luis Starlino 17/11/2024 | 09"25
// --- Declare Winner
// ---------------------------------------------------------------------------------------------
async function declareWinner(player1, player2) {

    console.log(`************📉 Result ************`);
    console.log(`⚪ Player 1 (${player1?.name}): ${player1?.points} point(s)`);
    console.log(`⚪ Player 2 (${player2?.name}): ${player2?.points} point(s)`);
    if (player1?.points == player2?.points) console.log(`❌ We didn't have Winners!`)
    else if (player1?.points > player2?.points) console.log(`🏆 Player 1 - (${player1?.name}) Wins! Congradulations!`)
    else console.log(`🏆 Player 2 - (${player1?.name}) Wins! Congradulations!`)
}

export default {
    main
}