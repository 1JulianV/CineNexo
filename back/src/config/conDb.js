require("dotenv").config()
const mongoose = require("mongoose")
 async function conectardb(){
    await mongoose.connect(process.env.MONGO_URI)
}
module.exports = {
    conectardb
}