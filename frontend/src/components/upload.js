import $ from "jquery";
import axios from "axios";
import { backendEndpoint } from "../global";
const upload = async () => {
    const template = `
    <div class="card-group">
        <form>
            <div class="mb-3">
                <label for="nameInput" class="form-label">Game Name</label>
                <input type="text" class="form-control" id="nameInput" placeholder="Game Name">
            </div>

            <div class="mb-3">
                <label for="descriptionInput" class="form-label">Description</label>
                <input type="text" class="form-control" id="descriptionInput" placeholder="Description">
            </div>

            <div class="mb-3">
                <label for="priceInput" class="form-label">Price</label>
                <input type="number" min = 0 class="form-control" id="priceInput" placeholder="Price in SOL">
            </div>

            <div class="mb-3">
                <label for="inputImage" class="form-label">Image</label>
                <input type="file" class="form-control" id="inputImage" placeholder="Image">
            </div>

            <div class="mb-3">
                <label for="inputFile" class="form-label">NFT File</label>
                <input type="file" class="form-control" id="inputFile" placeholder="File">
            </div>

            <div class="mb-3">
                <input type="button" class="form-control" id="submit" value="Submit">
            </div>
            <div class=" m-3 visually-hidden d-flex spinner-border text-secondary" id = 'spinner' role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </form>
        <p id='resp'></p>
    </div>
    
    `

    return template;

}

$("#content").on("click", "#submit", async (e) => {
    e.preventDefault();

    const name = $("#nameInput").val();
    const description = $("#descriptionInput").val();
    const price = $("#priceInput").val();
    const image = document.getElementById("inputImage").files[0];
    const file = document.getElementById("inputFile").files[0];
    const formData = new FormData();
    if (name === "" || description === "" || price === "" || image === "" || file === "") {
        alert("Please fill out all fields");
        return;
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("file", file);
    

    const url = backendEndpoint + "/ipfs/upload";
    $("#spinner").removeClass("visually-hidden");
    const res = await axios.post(url, formData, {withCredentials: true});
    $("#spinner").addClass("visually-hidden");
    if (res.status === 200) {
        $("#resp").html(`NFT created successfully
        The next address is the NFT created ${res.data}
        You can check it in <a href='https://docs.moralis.io/web3-data-api/solana/reference/get-sol-nft-metadata?network=devnet&address=DDy5QHKEDgg5ZyWmwi1rJKwYHe7ZR5udGQfJkc8EPfLM'>this link</a>.`);
    }
    else{
        alert("Not enough SOL in account");
    }
});

export default upload;