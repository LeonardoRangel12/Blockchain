import axios from "axios";
const gamePage = async () => {
    
    const  res = await axios.get("http://localhost:3001/user/random");
    const data = res.data;
    
    const template = 
        `
        <div class="row mb-4">
        <!-- First Column (Image) -->
        <div class="col-md-4">
          <img src="https://m.media-amazon.com/images/I/81MNtZgV-QL._AC_UF1000,1000_QL80_.jpg" alt="Game Image" class="img-fluid">
        </div>
  
        <!-- Second Column (Name, Description, Price, and Add to Cart button) -->
        <div class="col-md-8">
          <h2>Game Name</h2>
          <p>Description of the game goes here. This is a great game with amazing features and gameplay.</p>
          <p><strong>Price: $29.99</strong></p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
  
        `;

    return template;
}

export default gamePage;