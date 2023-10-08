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
    document.cookie = `publicKey=${publicKey.toString()}; Path=/;`;

    return publicKey;
}

// Función para desconectar la wallet
const disconnectWallet = async () => {

    document.cookie = `publicKey=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    return true;
}

export {connectWallet, disconnectWallet};