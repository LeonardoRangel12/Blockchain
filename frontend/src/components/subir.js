import axios from 'axios';
import $ from 'jquery';
const subir = async () => {
    const template = `
    <form>
        <input type="file" id="file" />
        <input id="uploadFile" type="button" value="Subir" />
    </form>
    `;

    return template;
}

$("#content").on( "click", "#uploadFile", async function(){
    console.log("click");
    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post("http://localhost:3001/ipfs/upload", formData, {headers: {
        'Content-Type': 'multipart/form-data'	
    }, withCredentials: true});
    alert(response.data);
    console.log(response.data);
});
export default subir;