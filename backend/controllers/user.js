const axios = require("axios");

// Obtiene datos de un usuario aleatorio
const getRandomUser = async () => {
    /* Genera datos de un usuario aleatorio

        Regresa el dato del primer valor (puede ser un arreglo de valores)
    */
    const  res = await axios.get("https://randomuser.me/api");
    const data = res.data.results[0];
    return data;
};

module.exports = {getRandomUser}