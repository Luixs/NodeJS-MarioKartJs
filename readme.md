<h1>🏎️ Mario Kart.JS | Felipão Project Challenge | Enhanced by: Luis Starlino | </h1>

  <table>
        <tr>
            <td>
                <img src="./assets/images/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Goals:</b>
                <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge will be to create a video game loc to simulate Mario Kart races, taking into account the rules and mechanics below.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./assets/images/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Drift: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./assets/images/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Drift: 4</p>
                <p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./assets/images/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Drift: 4</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./assets/images/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 5</p>
                <p>Drift: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./assets/images/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Drift: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./assets/images/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Drift: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules & Engines:</h3>

<b>Playes:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">The project draws two players to start the race:</label>

<b>Track Racing:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">The Players will race on a random track for 5 rounds</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">Each round, a track will be drawn, which can be a traight, a bend or a fight!</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">If the track block is a <strong>Straight</strong> line, the player musth throw a 6-sided die and add the SPEED atrribute, whoever wins...gets a point!</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">If the track block is a <strong>Bend</strong> line, the player musth throw a 6-sided die and add the DRIFT atrribute, whoever wins...gets a point!</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">If the track block is a <strong>Fight</strong> line, the player musth throw a 6-sided die and add the POWER atrribute, whoever loses...lose a point</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Players can have a negative score (values below 0)</label></li>
    </ul>
  </li>
</ul>

<b>🏆 Victory Condition:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">At the end, the winner is the one who has accomulated the most points!</label>

<b> 🎮 Gameplay:</b> </br>

[![Gameplay Image][gameplay]]([https://www.linkedin.com/in/luis-starlino/])


<!-- MARKDOWN LINKS & IMAGES -->
[gameplay]: assets/images/demo/gameplay.png
