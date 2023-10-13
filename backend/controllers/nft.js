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
  const secret = [
    240, 30, 163, 69, 255, 207, 141, 102, 238, 126, 98, 121, 197, 79, 240, 125,
    166, 61, 253, 103, 179, 42, 89, 224, 85, 212, 2, 62, 160, 61, 220, 181, 48,
    143, 248, 208, 91, 161, 25, 173, 27, 93, 116, 204, 40, 174, 134, 59, 107,
    39, 179, 38, 142, 20, 116, 91, 29, 51, 21, 164, 112, 49, 227, 0,
  ].slice(0, 32);

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
        timeout: 60000,
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
  console.log(nft.mint.address.toBase58());

  createGame({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price * LAMPORTS_PER_SOL,
    fileUrl: `${nft.mint.address.toBase58()}`,
  });

  res.send(nft.mint.address.toBase58());
};

module.exports = { mintNFT };
