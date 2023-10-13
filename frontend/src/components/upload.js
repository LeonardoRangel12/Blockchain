import $ from "jquery";
import axios from "axios";
const upload = async () => {
    const template = `
    <form>
    <input type ="text" id = "name" placeholder = "Nombre del NFT">
    <input type ="text" id = "description" placeholder = "Descripción del NFT">
    <input type ="number" min = 0 id = "price" placeholder = "Precio del NFT">
    <input type ="file" id = "file" placeholder = "Archivo del NFT">
    <input type = 'button' id = "submit" value = "Subir NFT">
    </form>
    `
    return template
}

$("#content").on("click", "#submit",async () => {
    const name = $("#name").val();
    const description = $("#description").val();
    const price = $("#price").val();
    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);
    const res = await axios.post("http://localhost:3001/ipfs/upload", formData, {withCredentials: true });
    console.log(res);
});

export default upload;