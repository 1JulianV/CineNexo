function validateMovies (req, res, next){
    const {title, year, director, duration, genre, rate, poster} = req.body
    if(!title || !year || !director || !duration || !genre || !rate  || !poster){
       return res.status(500).json({
        message: "Faltan campos obligatorios"
       })
       }
       next()
    }

module.exports ={
    validateMovies
}
