const { LAMPORTS_PER_SOL } = require("@solana/web3.js");
const { Web3Storage } = require("web3.storage");

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
  res.locals.name = "nft" + fileName + Date.now().toString() + "." + extension;
  const name = res.locals.name;
  const files = [new File([file.buffer], name)];
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
    price: 0.1 * LAMPORTS_PER_SOL,
    description: "My token chido",
    fileUrl: `https://${imageCid}.ipfs.dweb.link/${name}`,
  };
  // Crea el buffer del JSON
  const buffer = Buffer.from(JSON.stringify(metadata));
  const metadataFile = new File([buffer], "metadata.json");
  // Sube el metadata al archivo subido
  const metadataCid = await client.put([metadataFile]);
  res.locals.metadataCid = metadataCid;

  next();
};

module.exports = { uploadFile, addMetadata };
