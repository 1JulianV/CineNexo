const {getMovies, postMovies} = require("../services/index")
async function moviesController(req, res){
    try {
        const movies = await getMovies()
     res.status(201).json({
        message:"la peticion ha sido realizada",
        data:movies
    })
    } catch (error) {
       res.status(500).json({
        error: "error en el controlador"
       }) 
    }
}
async function createMovie(req, res){
    try {
        const newmovies = await postMovies(req.body)
     res.status(201).json({
        message:"la peticion ha sido realizada",
        data: newmovies
    })
    } catch (error) {
       res.status(500).json({
        error: "error en el controlador"
       }) 
    }
}
module.exports = {
    moviesController,
    createMovie
}