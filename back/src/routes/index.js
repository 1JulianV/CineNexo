const Router = require("express")
const {moviesController, createMovie} = require("../controllers/index")
const {validateMovies} = require("../middlewares/formulario")
router = Router()

router.get("/movies", moviesController)
router.post("/movies", validateMovies, createMovie)

module.exports = {
    router
}
