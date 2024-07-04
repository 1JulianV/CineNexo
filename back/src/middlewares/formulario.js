function validateMovies (req, res, next){
    const {title, year, director, duration, genre, rate, poster} = req.body
    if(!title || !year || !director || !duration || !genre || !rate  || !poster){
       return res.status(500).json({
        message: "Faltan campos obligatorios"
       })
       }
       if(year < 1900 || year > 2030){
        return res.status(500).json({
            message: "Ingrese un año correcto"
           })
       }
       if(genre.lenght > 4){
        return res.status(500).json({
            message: "Ingrese maximo 3 géneros"
           })
       }
       if(rate < 0 || year > 10){
        return res.status(500).json({
            message: "Ingrese maximo 3 géneros"
           })    
       }
       next()
    }

module.exports ={
    validateMovies
}
