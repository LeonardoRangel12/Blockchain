import axios from "axios";
const connectWallet = async () => {
    /*
        Este código verifica si se tiene Phantom instalado, y si lo está se conecta a la wallet.

        Esta función devuelve la publicKey de la wallet conectada, o false si no se pudo conectar.
    */
    const provider = window?.phantom?.solana;
    const {solana} = window;

    // Si Phantom no está instalado, o no está conectado, da error
    if (!provider?.isPhantom || !solana.isPhantom){
        setTimeout(() => {
            window.open("https://phantom.app/", "_blank");	
        }, 2000);
        return false;
    }

    let phantom;
    if (provider?.isPhantom) phantom = provider;

    const {publicKey} = await phantom.connect();

    // Crea la cookie
    const res = await axios.post(backendEndpoint + "/wallet/connect", {publicKey}, {"withCredentials": true});
    if (res.status === 200) return publicKey;
    
    return false;
}

// Función para desconectar la wallet
const disconnectWallet = async () => {

    const res = await axios.get(backendEndpoint + "/wallet/disconnect" , {"withCredentials": true});
    if (res.status === 200) return true;
    return false;
}

const loginWallet = async () => {
    const res = await axios.get(backendEndpoint + "/wallet/login", {"withCredentials": true});
    if(!res.data) return false;
    return res.data;
    
}

export {connectWallet, disconnectWallet, loginWallet};