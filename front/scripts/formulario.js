const axios = require("axios")

function subirPelicula(event) {
    event.preventDefault()
    const title = document.getElementById("titulo").value
    const year = parseInt(document.getElementById("anio").value, 10)
    const director = document.getElementById("director").value
    const duration = document.getElementById("duracion").value
    const rate = parseFloat(document.getElementById("puntuacion").value)
    const poster = document.getElementById("poster").value

    const genre = Array.from(document.querySelectorAll('.generosdiv input[type="checkbox"]:checked')).map(checkbox => {
        return checkbox.value
    })
    if (!title || !year || !director || !duration || genre.length === 0 || !rate || !poster) {
        return alert("Complete todos los campos")
    } else {
        const peliculaObj = {
            title,
            year,                    
            director,
            duration,
            genre,
            rate,
            poster
        };
        console.log(peliculaObj)
        axios.post("http://localhost:3000/movies", peliculaObj)
    .then((res) => {
        console.log("Respuesta del servidor:", res.data);
        alert("Película añadida correctamente");
    })
    .catch((err) => {
        console.error("Error al añadir la película:", err);
        alert("Error al añadir la película");
    });
    }
}
module.exports = {
    subirPelicula
}
