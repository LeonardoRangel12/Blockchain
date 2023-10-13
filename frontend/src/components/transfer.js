import $ from 'jquery';
import axios from 'axios';
import {connect} from './connect';
import {disconnectWallet} from './wallet';
import backendEndpoint from '../global';
const transfer = async() =>{

    const template = `        
    <div class = "row">
        <div class = "col-md-12">
            <h4>Esta ventana se usa para hacer transferencias</h4>
            <h3>Wallet: <b></b></h3>
        </div>
    </div>
    <button id = "disconnect" type="submit" class = "flex btn btn-danger">Desconectar</button>
    <div class = "row">
    <form>
        <div class = "mb-3">
            <label for="accountInput" class="form-label">Clave de cuenta</label>
            <input class="form-control" id="accountInput" aria-describedby="accountInput">
            <div id="accountInput" class="form-text">Busque su clave en Phantom Wallet</div>
        </div>
        <div class = "mb-3">
            <label for="accountQuantity" class="form-label">Monto</label>
            <input type = "number" min ="0" step = "0.00001" class="form-control" id="accountQuantity" aria-describedby="accountQuantity">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>`;

    return template;
}



$(".container").on("click", "#disconnect", async () => {
    if(!await disconnectWallet()) 
        alert("Algo salió mal");
    $("#content").html(await connect());
      
});

$("form").on("submit", async (event) => {
    event.preventDefault();
    const account = $("#accountInput").val();
    const quantity = $("#accountQuantity").val();
    const res = await axios.post(backendEndpoint + "/transfer", {
        account: account,
        quantity: quantity
    });
    console.log(res);
});

export default transfer;