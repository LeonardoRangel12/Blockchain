const axios = require("axios");

// Obtiene datos de un usuario aleatorio
const getRandomUser = async (req,res,next) => {
    /* Genera datos de un usuario aleatorio

        Regresa el dato del primer valor (puede ser un arreglo de valores)
    */
    const  resp = await axios.get("https://randomuser.me/api");
    const data = resp.data.results[0];
    res.send(data);
};

module.exports = {getRandomUser}