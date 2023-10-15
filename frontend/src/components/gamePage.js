import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import {backendEndpoint} from "../global";
import axios from "axios";

const gamePage = async () => {

    // Get the query parameters from the current URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get a specific parameter by name
    const id = urlParams.get('id');
    console.log(id);
    const endpoint = `${backendEndpoint}/game/${id}`
    const  res = await axios.get(endpoint, {withCredentials: true});
    const game = res.data.game;
    const template = 
        `
        <div class="row mb-4">
        <!-- First Column (Image) -->
        <div class="col-md-4">
          <img src="https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs=" alt="Game Image" class="img-fluid">
        </div>
  
        <!-- Second Column (Name, Description, Price, and Add to Cart button) -->
        <div class="col-md-8">
          <h2>${game.name}</h2>
          <p>${game.description}.</p>
          <p>Price: <strong>${game.price / LAMPORTS_PER_SOL} SOL</strong></p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    
        `;

    return template;
}

export default gamePage;