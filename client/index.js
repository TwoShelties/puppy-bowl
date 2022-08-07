import { fetchAllPlayers } from "./ajaxHelpers";
import { renderAllPlayers, renderNewPlayerForm } from "./renderHelpers";

export const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
};

init();

let body = document.querySelector("body");
body.style.backgroundImage =
  "url('https://thumbs.dreamstime.com/b/grass-seamless-pattern-14172364.jpg')";

let yeetBtn = document.querySelectorAll("button");
yeetBtn.style.cssText = `
  background-color: blue,
`;
