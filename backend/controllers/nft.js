const {
    Metaplex,
    keypairIdentity,
    bundlrStorage,
  } = require("@metaplex-foundation/js");
  const {
    Connection,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
  } = require("@solana/web3.js");
  

const game = require("../services/game");
  
  const mintNFT = async (req, res, next) => {
    // Wallet de GSprout
    const secret = [
      240, 30, 163, 69, 255, 207, 141, 102, 238, 126, 98, 121, 197, 79, 240, 125,
      166, 61, 253, 103, 179, 42, 89, 224, 85, 212, 2, 62, 160, 61, 220, 181, 48,
      143, 248, 208, 91, 161, 25, 173, 27, 93, 116, 204, 40, 174, 134, 59, 107,
      39, 179, 38, 142, 20, 116, 91, 29, 51, 21, 164, 112, 49, 227, 0,
    ].slice(0, 32);
    let seed = Uint8Array.from(secret);
    const myKeyPair = Keypair.fromSeed(seed);
  
    const connection = res.locals.connection;
    const metaplex = Metaplex.make(connection)
      .use(keypairIdentity(myKeyPair))
      .use(
        bundlrStorage({
          address: "https://devnet.bundlr.network",
          providerUrl: "https://api.devnet.solana.com",
          timeout: 60000,
        })
      );
  
    const metadataCid = res.locals.metadataCid;
    const name = req.body.name;
    const { nft } = await metaplex.nfts().create(
      {
        uri: metadataCid,
        name: name,
        sellerFeeBasisPoints: 0,
      },
      { commitment: "finalized" }
    );
  
      await game.createGame({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price * LAMPORTS_PER_SOL,
        fileUrl: `https://${metadataCid}.ipfs.dweb.link/${name}`,
        imageUrl: req.files["image"][0].buffer,
      });

    res.send(nft.mint.address.toBase58());
  };
  
  module.exports = { mintNFT };