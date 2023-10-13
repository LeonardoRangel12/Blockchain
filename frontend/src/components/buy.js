const buy = async() => {

    var template = `<div class="row">`;

    const res = await axios.get("http://localhost:3001/game");
    const games = res.data.games;
    games.forEach(element => {
        template = template + `
        <div class="col-md-4">
            ${games.name} ${games.price} ${games.description}
        `;
    });
}

export default buy;