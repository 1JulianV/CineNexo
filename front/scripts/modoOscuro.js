//Cambia las clases de los elementos para hacer un modo oscuro
const modoOscuro = document.getElementById("modoOscuro")
const footer = document.querySelector("footer")
const change = document.querySelector(".change")
modoOscuro.addEventListener("click", ()=> {
  modoOscuro.classList.toggle("activo")
  document.body.classList.toggle("bodyOscuro")
  footer.classList.toggle("footerOscuro")
  change.classList.toggle("changeOscuro")
})
module.exports = {
  modoOscuro
}