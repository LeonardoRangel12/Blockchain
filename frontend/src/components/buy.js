import product from "./product";
const buy = async() => {

    var template = `<div class="row">`;

    const res = await axios.get(backendEndpoint + "/game");
    const games = res.data.games;
    games.forEach(async element => {
        template = template  + await product(element);
    });

    return template;
}

export default buy;