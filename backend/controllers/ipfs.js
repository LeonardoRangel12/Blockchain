const { Web3Storage } = require("web3.storage");
const { Metadata, createMetadataV2, createMasterEditionV3, DataV2 } = require("@metaplex-foundation/js");
const { PublicKey, Keypair } = require("@solana/web3.js");

// Regresa el token de web3.storage
const makeStorageClient = async () => {
  return new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYwZjgzOTZEMTBCNTNhODE3YzA0OGFFOUIwMUE2YjRCMkIyMDMwMDMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTcwODI1Mzk1NTQsIm5hbWUiOiJTcHJvdXQifQ.Gv0ZTfQUPycYYIcYujG6AHA9mqLUWgcewdyfNeYmni8",
  });
};
// Sube un archivo al IPFS de web3.storage
const uploadFile = async (req, res, next) => {
  // Crea conexión
  const client = await makeStorageClient();
  // Obtiene el archivo
  const file = req.file;

  // Separa el nombre del archivo y la extensión
  const fileName = file.originalname.split(".")[0];
  const extension = file.originalname.split(".")[1];
  const files = [
    new File(
      [file.buffer],
      "nft" + fileName + Date.now().toString() + "." + extension
    ),
  ];

  // Subimos el archivo a IPFS
  const cid = await client.put(files);
  res.locals.cid = cid;
  next();
};

const createNFT = async (req, res, next) => {
  const connection = res.locals.connection;
  const wallet = res.locals.publicKey;
  // Es la llave publica del NFT
  const mintKey = Keypair.generate();
  const metadata = new Metadata({
    name: 'NFT Name', 
    symbol: 'NFT', 
    uri: 'ipfs://' + res.locals.cid, // URI del metadata
    sellerFeeBasisPoints: 500, 
    creators: [
      { address: wallet, verified: true, share: 100 },
    ],
  })

  // Construir transacción
  const txn = new createMetadataV2(
    {feePayer : wallet.publicKey},
    {
      metadata,
      updateAuthority: wallet.publicKey,
      mintKey: mintKey.publicKey,
      mintAuthority: wallet.publicKey,
    }
  );

  await wallet.signTransaction(txn);
  await connection.sendRawTransaction(txn.serialize());
  await connection.confirmTransaction(txn.signature);
  res.send(200);
};

module.exports = { uploadFile, createNFT };
