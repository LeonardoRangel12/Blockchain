import axios from "axios";
const user = async () => {
    /*
        Obtiene datos de un usuario aleatorio

        Regresa la plantilla de un usuario
    */
    const  res = await axios.get("http://localhost:3001/user/random?number=10");
    const data = res.data;
    let plantillaFinal = "";
    for(let i = 0; i< 10; i++){
        plantillaFinal= plantillaFinal + `
        <div class="card" style="width: 18rem;">
        <img src="${data.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name.first + " "+ data.name.last}</h5>
                <p class="card-text">${data.gender}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
    }

    return plantillaFinal;
}

export default user;