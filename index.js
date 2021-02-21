
 // importing the server - this is why node index.js NOT node server.js
 const server = require("./api/server.js")

//  server.get("/", (req,res)=>{
//     res.json( {message: "Server Working" } )
//  })
 
 server.listen(5000, ()=>{
    console.log("server started on port 5000")
 })
