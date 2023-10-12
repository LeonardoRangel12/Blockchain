import axios from "axios";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction, Connection, clusterApiUrl } from "@solana/web3.js";
const connectWallet = async () => {
  /*
        Este código verifica si se tiene Phantom instalado, y si lo está se conecta a la wallet.

        Esta función devuelve la publicKey de la wallet conectada, o false si no se pudo conectar.
    */
  const provider = await getProvider();

  let phantom;
  if (provider?.isPhantom) phantom = provider;

  const { publicKey } = await phantom.connect();

  // Crea la cookie
  const res = await axios.post(
    "http://localhost:3001/wallet/connect",
    { publicKey },
    { withCredentials: true }
  );
  if (res.status === 200) return publicKey;

  return false;
};

// Función para desconectar la wallet
const disconnectWallet = async () => {
  const res = await axios.get("http://localhost:3001/wallet/disconnect", {
    withCredentials: true,
  });
  if (res.status === 200) return true;
  return false;
};

// Función para verificar si existe la cookie de la publicKey
const loginWallet = async () => {
  const res = await axios.get("http://localhost:3001/wallet/login", {
    withCredentials: true,
  });
  if (!res.data) return false;
  return res.data;
};

const checkBalance = async () => {
  const res = await axios.get("http://localhost:3001/wallet/getBalance", {
    withCredentials: true,
  });
  if (res.status == 500) throw new Error(res.data);
  return res.data;
};

// Envía una transferencia de SOL a una cuenta
const transferSOL = async (fromPublicKey, toPublicKey, quantity) => {
    /* Envía SOL de una cuenta a otra
  
          Regresa el estado
      */
    // console.log(req.cookies);
    // const keypair = req.cookies.Keypair;
    // const toKeypair = req.body.toKeypair;
    // let transaction = new Transaction();
  
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const provider = await getProvider();
    let transaction = new Transaction();
  
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: fromPublicKey,
        toPubkey: toPublicKey,
        lamports: quantity * LAMPORTS_PER_SOL,
      })
    );
  
    // Traer el último bloque de hash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    // Asignamos la comisión
    transaction.feePayer = fromPublicKey;
  
    // Firmar transacción
    const transactionSignature = await provider.signTransaction(transaction);
  
    // Enviar transacción
    const txid = await connection.sendRawTransaction(
      transactionSignature.serialize()
    );
    console.info(`Transaction ${txid} sent`);
    // Confirmar transacción
    const confirmation = await connection.confirmTransaction(txid, {
      commitment: "singleGossip",
    });
    
    const {slot} = confirmation.value;
  
    console.info(`Transaction ${txid} confirmed in block ${slot}`);
  
    return true;
  };


const getProvider = async () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};


export {
  connectWallet,
  disconnectWallet,
  loginWallet,
  checkBalance,
  transferSOL,
};
