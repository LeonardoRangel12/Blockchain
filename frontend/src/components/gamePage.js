import backendEndpoint from "../global";
import axios from "axios";

const gamePage = async () => {

    // Get the query parameters from the current URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get a specific parameter by name
    const id = urlParams.get('id');

    const endpoint = `${backendEndpoint}/game/${id}`
    const  res = await axios.get(endpoint);
    const game = res.data.game;
    console.log(game.name);
    const template = 
        `
        <div class="row mb-4">
        <!-- First Column (Image) -->
        <div class="col-md-4">
          <img src="${game.imageUrl}" alt="Game Image" class="img-fluid">
        </div>
  
        <!-- Second Column (Name, Description, Price, and Add to Cart button) -->
        <div class="col-md-8">
          <h2>${game.name}</h2>
          <p>${game.description}.</p>
          <p><strong>Price: ${game.price}</strong></p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    
        `;

    return template;
}

export default gamePage;