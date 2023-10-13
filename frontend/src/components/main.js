import axios from "axios";
import card from "./card";
import { backendEndpoint, LAMPORTS_PER_SOL } from "../global";
const main = async () => {
  var template = `
  <div class="row">
  <div class="card-group">
  
  `;
  const url = backendEndpoint + "/game";
  const res = await axios.get(url);
  const games = res.data.games;
  console.log(games);
  games.forEach(async (element) => {
    console.log(template);
    template = template + await card(element);
  });
  return template;
};

export default main;
