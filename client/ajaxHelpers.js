import {
  renderAllPlayers,
  renderSinglePlayer,
  playerData,
} from "./renderHelpers";

import { init } from "./index";

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2206-VPI-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.players;
  } catch {
    console.error("Error, dogs not found...");
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${playerId}`
    );
    const result = await response.json();
    let playerData = result.data.player;
    // console.log(result.data.player);
    renderSinglePlayer(playerData);
    let backBtn = document.getElementById("see-all");
    backBtn.addEventListener("click", function () {
      // Re-initialize all of the players:
      init();
    });
  } catch (err) {
    console.error(err);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2206-VPI-WEB-PT/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("YOU CANNOT YEET THIS PUPPY FOR SOME REASON!!");
  }
};
