const {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} = require("@metaplex-foundation/js");
const {
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const {createGame} = require("../services/game");

const mintNFT = async (req, res, next) => {
  
  // Wallet de GSprout
  const secret = process.env.SECRET.slice(0, 32);
  // Crea el keypair
  let seed = Uint8Array.from(secret);
  const myKeyPair = Keypair.fromSeed(seed);

  // Obtiene la conexión
  const connection = res.locals.connection;

  // Crea el cliente de Metaplex
  const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(myKeyPair))
    .use(
      bundlrStorage({
        address: "https://devnet.bundlr.network",
        providerUrl: "https://api.devnet.solana.com",
        timeout: 120000,
      })
    );

  // Obtiene el metadataCid subido anteriormente
  const metadataCid = res.locals.metadataCid;


  // Crea el NFT
  const { nft } = await metaplex.nfts().create(
    {
      uri: metadataCid,
      name: req.body.name,
      sellerFeeBasisPoints: 0,
    },
    { commitment: "finalized" }
  );

  // Imprime la dirección del NFT

  createGame({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price * LAMPORTS_PER_SOL,
    fileUrl: `${nft.mint.address.toBase58()}`,
  });

  res.sendStatus(200);
};

module.exports = { mintNFT };
