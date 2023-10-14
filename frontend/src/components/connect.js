import $ from "jquery";
import {connectWallet, loginWallet} from "./wallet";
import transfer from "./transfer";

const connect = async () => {
    const res = await loginWallet();
    if(res) {
        $("#content").html(await transfer());
        return
    }
    const template = `<div class = "row">
    <button id = "connect" type="submit" class = "flex btn btn-primary">Conectar a Phantom</button>
    </div>`;

    return template;
}

$("#content").on("click", "#connect", async () => {
    const publicKey = await connectWallet();
    if(!publicKey) alert("Algo salió mal");

    else $("#content").html(await transfer());
});

export default connect;