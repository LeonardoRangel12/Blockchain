import $ from 'jquery';
import {connect} from './connect';
import {checkBalance, connectWallet, disconnectWallet, transferSOL} from './wallet';
const transfer = async(publicKey) =>{
    /*
        Muestra el balance
    */
    const balance = await checkBalance();

    const template = `        
    <div class = "row">
        <div class = "col-md-12">
            <h3>Esta ventana se usa para hacer transferencias</h3>
            <h4>Wallet: <b>${publicKey}</b></h4>
            <h5>Balance: <b>${balance} SOL</b></h5>
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
        <button id="transfer" type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>`;

    return template;
}


// Cuando das click en el botón de desconectar, se desconecta
$(".container").on("click", "#disconnect", async () => {
    // Si algo sale mal, da error
    if(!await disconnectWallet()) 
        alert("Algo salió mal");
    $("#content").html(await connect());
      
});

// Cuando se da click en el botón de submit, se envía la transferencia
$(".container").on("click", "#transfer", async (event) => {
    event.preventDefault();
    const fromPublicKey = await connectWallet();
    const toPublicKey = $("#accountInput").val();
    const quantity = $("#accountQuantity").val();
    console.log(fromPublicKey, toPublicKey, quantity);
    const res = await transferSOL(fromPublicKey, toPublicKey, quantity);

});
export default transfer;