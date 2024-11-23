// --------------------------------------------------------------------------------------
// IMPORT'S
// --------------------------------------------------------------------------------------
import { powerUpEngine } from '../features/powerUps.js';
import { GAME_CONFIG } from "../constants/game.js";
import { _players } from "../constants/players.js";
import _utilsFunc from './utils.js';

/**************************************************************************************
// @LuisStarlino |  16/11/2024  16"30
// --- The simulator's main function.
// --- This function willl be called when the project runs and will start the race!
/***************************************************************************************/
async function main() {

    // --- Get Random Players
    let randomPlayer1 = _players[Math.floor(Math.random() * 5)];
    let randomPlayer2 = _players[Math.floor(Math.random() * 5)];

    console.log("\n****🏎️  Mario Kart Simulator ****");
    console.log("*** 🏴󠁳󠁣󠀰󠀴󠁿 Starting a new Race! ***");
    console.log(`*** PLAYERS: ${randomPlayer1?.name} X ${randomPlayer2?.name}`);

    await playRaceEngine(randomPlayer1, randomPlayer2);
}


// --------------------------------------------INICIO-------------------------------------------
// @Luis Starlino 17/11/2024 | 09"25
// --- Race Engine
// ---------------------------------------------------------------------------------------------
async function playRaceEngine(player1, player2) {

    // --- 5 Rounds/Runs
    for (let round = 1; round <= GAME_CONFIG.TURNS; round++) {

        // -----------------------------------------
        // --- Role 1: Get the sorted block/track
        // -----------------------------------------
        let track = await _utilsFunc.getRandomBLock();

        // -----------------------------------------
        // --- Role 2: Rolling the dice
        // -----------------------------------------
        let dicePlayer1 = await _utilsFunc.rollDice();
        let dicePlayer2 = await _utilsFunc.rollDice();

        // -----------------------------------------
        // --- Show to user
        // -----------------------------------------
        console.log("\n*************************");
        console.log(`🏁 Round: ${round}`);
        console.log(`🏁 Track: ${track}`);

        // -----------------------------------------
        // --- Role 3: Skills players 
        // -----------------------------------------
        let totalSkillsPlayer1 = 0
        let totalSkillsPlayer2 = 0

        // -----------------------------------------
        // --- Role 4: Randomly Power-Up!
        // -----------------------------------------
        console.log(`✴️  Random Power-UP`);

        let player1RandomPowerUp = await powerUpEngine(player1, track);
        let player2RandomPowerUp = await powerUpEngine(player2, track);

        console.log(`✴️  ********************************* ✴️`);

        // -----------------------------------------
        // --- Role 4: Apply Role Engine
        // -----------------------------------------
        totalSkillsPlayer1 = await _utilsFunc.rollingDiceEngine(player1?.name, track, dicePlayer1, player1RandomPowerUp);
        totalSkillsPlayer2 = await _utilsFunc.rollingDiceEngine(player2?.name, track, dicePlayer2, player2RandomPowerUp);

        // -----------------------------------------
        // --- Role 4.1: Unique Fight Role
        // -----------------------------------------
        if (track.toLocaleLowerCase() == "fight") {
            player2 = { ...player2, points: totalSkillsPlayer1 > totalSkillsPlayer2 && player2?.points > 0 ? player2?.points - 1 : player2?.points };
            player1 = { ...player1, points: totalSkillsPlayer2 > totalSkillsPlayer1 && player1?.points > 0 ? player1?.points - 1 : player1?.points }

            if (totalSkillsPlayer1 == totalSkillsPlayer2) console.log("Both had the same Result!");
        }


        // -----------------------------------------
        // --- Role 5: Check Turn Winner
        // -----------------------------------------
        if (totalSkillsPlayer1 > totalSkillsPlayer2 && track.toLocaleLowerCase() !== "fight") {
            console.log(`✅ Player 1 Winner the Round!`);
            player1 = { ...player1, points: player1?.points + 1 };
        } else if (totalSkillsPlayer2 > totalSkillsPlayer1 && track.toLocaleLowerCase() !== "fight") {
            console.log(`✅ Player 2 Winner the Round`);
            player2 = { ...player2, points: player2?.points + 1 };
        }
    }

    // --- SHOW WINNER
    await declareWinner(player1, player2)
}

// --------------------------------------------INICIO-------------------------------------------
// @Luis Starlino 17/11/2024 | 09"25
// --- Declare Winner
// ---------------------------------------------------------------------------------------------
async function declareWinner(player1, player2) {

    console.log(`\n************📉 Result ************`);
    console.log(`⚪ Player 1 (${player1?.name}): ${player1?.points} point(s)`);
    console.log(`⚪ Player 2 (${player2?.name}): ${player2?.points} point(s)`);
    if (player1?.points == player2?.points) console.log(`❌ We didn't have Winners!`)
    else if (player1?.points > player2?.points) console.log(`🏆 Player 1 - (${player1?.name}) Wins! Congradulations!`)
    else console.log(`🏆 Player 2 - (${player2?.name}) Wins! Congradulations!`)
}

export default {
    main
}