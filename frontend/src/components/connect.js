import $ from "jquery";
import {connectWallet, loginWallet} from "./wallet";
import transfer from "./transfer";


const connect = async () => {
    
    const res = await loginWallet();
    // Si ya se conectó al wallet, salta a la ventana de transferencia
    if(res) {
        $("#content").html(await transfer(res));
        return
    }
    const template = `<div class = "row">
    <button id = "connect" type="submit" class = "flex btn btn-primary">Conectar a Phantom</button>
    </div>`;

    return template;
}

// Cuando se presiona conectar, se trata de conectar a la wallet
$("#content").on("click", "#connect", async () => {
    
    const publicKey = await connectWallet();
    // Si no se puede da error
    if(!publicKey) alert("Algo salió mal");

    else $("#content").html(await transfer(publicKey));
});

export {connect};