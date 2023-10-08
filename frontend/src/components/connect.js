import $ from "jquery";
import {connectWallet} from "./phantomLibrary";
import transfer from "./transfer";

const connect = async () => {
    if(!await getPublicKey()){
        const template = `<div class = "row">
        <button id = "connect" type="submit" class = "flex btn btn-primary">Conectar a Phantom</button>
        </div>`;
    
        return template;
    }
    
    $("#content").html(await transfer());
}

$("#content").on("click", "#connect", async () => {
    const publicKey = await connectWallet();
    if(!publicKey)
        return;
    $("#content").html(await transfer());
});

// Función para obtener la publicKey de la cookie
const getPublicKey = async() => {
    /*
        Esta función obtiene la publicKey de la wallet.

        La estructura de cookie es:
        cookie=12341244252io23hjirhj;

        Esta función devuelve la publicKey de la wallet conectada, o false si no se pudo conectar.
    */
    const cookie = document.cookie;
    const cookieArray = cookie.split(";");
    const index = cookieArray.findIndex((element) => element.includes("publicKey"));
    if(index === -1)
        return false;

    const publicKey = cookieArray[index].split("=")[1];
    
    return publicKey;
}

export {connect, getPublicKey};