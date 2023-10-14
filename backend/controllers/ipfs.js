const { Web3Storage } = require("web3.storage");
const Moralis = require("moralis")
const { MintV2  } = require('@metaplex-foundation/mpl-candy-machine');

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
  res.locals.name = "nft" + fileName + Date.now().toString() + "." + extension
  const name = res.locals.name;
  const files = [
    new File(
      [file.buffer],
      name,
    ),
  ];
    // Subimos el archivo a IPFS
    res.locals.imageCid = await client.put(files);
    next();
};


const addMetadata = async (req, res, next) => {
    // Crea conexión
    const client = await makeStorageClient();
    const name = res.locals.name;
    const imageCid = res.locals.imageCid;

    const metadata = {
      name: "NFT",
      // symbol: "NB",
      price: 0.1,
      description: "My token chido",
      fileUrl: `https://${imageCid}.ipfs.dweb.link/${name}`,
    }
    // Crea el buffer del JSON
    const buffer = Buffer.from(JSON.stringify(metadata));
    const metadataFile = new File([buffer], "metadata.json");
    // Sube el metadata al archivo subido
    const metadataCid = await client.put([metadataFile]);
    res.locals.metadataCid = metadataCid;
    console.log(`https://${metadataCid}.ipfs.dweb.link`);

    next();
}

const mintNFT = async (req, res, next) => {
  const connection = res.locals.connection;
  const metadataCid = res.locals.metadataCid;
  const mint = await mintV2({
    connection,
    uri: `https://${metadataCid}.ipfs.dweb.link/metadata.json`,
    name: "NFT",
  });

  const NFT = Moralis.Object.extend("NFT");

  const nft = new NFT();

  nft.set("name", "NFT");
  nft.set('tokeAddress', mint.pubkey);
  nft.set('tokenId', mint.pubKey);
  nft.set('tokenUri', metadataCid);
  nft.set('confirmed', false);

  await nft.save();

  console.log(await NFT.get(mint.pubKey));

  nft.set('confirmed', true);

  await nft.save();
};

module.exports = { uploadFile, addMetadata, mintNFT };
