const {app} = require("./src/server")
const {conectardb} = require("./src/config/conDb")

conectardb().then((result) => {
    app.listen(3000, ()=>{
        console.log("server listen on port 3000");
    })
}).catch((error)=> {
    console.error("error");
})
