const {Movie} = require("../schemas/movies")

async function getMovies(){
  return await Movie.find()
}
async function postMovies(res){
  return await Movie.create(res)
}
module.exports = {
    getMovies,
    postMovies
}
