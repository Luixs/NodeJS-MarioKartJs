/**************************************************************************************
// @LuisStarlino |  23/11/2024  08"15
//  --- A power-up mechanic that affects gameplay during the race
//  --- At the start of each round, players can randomly draw a power-up
    Examples of power-ups:
    Speed Boost (+2 SPEED for Straight tracks)
    Drift Mastery (+2 DRIFT for Bend tracks)
    Shield (Negate losing points on Fight tracks)
    Sabotage (Deduct 1 point from the opponent's total score)
    {type: }
/***************************************************************************************/
export async function powerUpEngine(player, track) {

    // -----------------------------------------
    // --- Role 1 | Engine
    // -----------------------------------------
    let powerUp = await drawingPowerUp(player?.name);

    // -----------------------------------------
    // --- Role 2 | Get current type track
    // -----------------------------------------
    switch (track.toUpperCase()) {
        case "STRAIGHT": // -- Use Speed

            if (powerUp.type == "speed") {
                var newV = player.speed * powerUp.value;
                console.log(`🔹 ${player?.name} receive the Speed PowerUP | Switch Speed from ${player.speed} to ${newV} 🔹`);
                return newV;
            }

            // --- Receive Nothing
            await noPowerUpReceived(player?.name);
            return player.speed;


        case "BEND": // -- Use drift

            if (powerUp.type == "drift") {
                var newV = player.drift * powerUp.value;
                console.log(`🔹 ${player?.name} receive the Drift PowerUP | Switch Drift from ${player.drift} to ${newV} 🔹`);
                return newV;
            }

            // --- Receive Nothing
            await noPowerUpReceived(player?.name);
            return player.drift;


        case "FIGHT": // -- Use Power

            if (powerUp.type == "fight") {
                var newV = player.power * powerUp.value;
                console.log(`🔹 ${player?.name} receive the Fight PowerUP | Switch Power from ${player.power} to ${newV} 🔹`);
                return newV;
            }

            // --- Receive Nothing
            await noPowerUpReceived(player?.name);
            return player.power;

    }
}

async function drawingPowerUp(playerName) {

    let power = { type: null, value: 0 }

    // -----------------------------------------
    // --- Role 1 | Did Player get the power?
    // -----------------------------------------
    let getPower = Math.random() > 0.55;
    if (!getPower) return power;


    // -----------------------------------------
    // --- Role 2 | Choosing a Power and return
    // -----------------------------------------
    let choosePower = Math.random();
    switch (choosePower) {
        case choosePower < 0.33:
            power = { type: "speed", value: 2 };
            break;
        case choosePower < 0.66:
            power = { type: "drift", value: 2 };
            break;
        default:
            power = { type: "fight", value: 2 };
            break;
    }

    return power;

}


async function noPowerUpReceived(name) {
    console.log(`❌ ${name} received no PowerUp! ❌`)
}