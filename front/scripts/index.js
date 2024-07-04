const {tempData, cargarpeliculas} = require("./tempData")
const modoOscuro = require("./modoOscuro")
const axios = require("axios")
const {subirPelicula} = require("./formulario")
//añade el modo oscuro a la pagina sin invocarlo
modoOscuro
const contenedor = document.querySelector(".contenedor")
if(window.location.pathname === '/front/index.html'){
    /* Se utiliza axios para que lleve a cabo el mapeo de las pelìculas*/
    axios.get("http://localhost:3000/movies")
    .then((result) => {
        const resultado = result.data.data
        const elementosDePeliculas = resultado.map(cargarpeliculas)
        elementosDePeliculas.forEach((elemento) => contenedor.appendChild(elemento))
    })
    .catch((err) => {
        console.error("No se cargaron correctamente las peliculas desde la api")
        const elementosDePeliculas = tempData.map(cargarpeliculas)
        elementosDePeliculas.forEach((elemento) => contenedor.appendChild(elemento))
    })
}
if (window.location.pathname === "/front/Add-film.html") {
    /* Se añaden eventos para subir y limpiar campos */
    document.getElementById("subir").addEventListener("click", subirPelicula)
    document.getElementById("limpiar").addEventListener("click", () => {
        document.getElementById("rellenar").reset()
    })
}
