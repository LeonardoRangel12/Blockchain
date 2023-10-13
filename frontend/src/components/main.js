import card from "./card";
const main = async () => {
  var template = `
  <div class="row">
  <div class="card-group">
  
  `;
  const res = await axios.get(backendEndpoint + "/game");
  const games = res.data.games;
  games.forEach(async (element) => {
    template = template + await card(element);
  });
  return template;
};

export default main;
