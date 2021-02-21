// importing the server - this is why node index.js NOT node server.js
const server = require("./api/server.js")
const express = require("express")

// IMPORTS
const actionsRouter = require("./api/actions/actions-router")
const projectsRouter = require("./api/projects/projects-router")

// MIDDLEWARE
server.use( express.json() )

// ROUTERS
server.use(actionsRouter)
server.use(projectsRouter)

// ERROR MIDDLEWARE ( IF TIME )

server.listen(5000, ()=>{
   console.log("server started on port 5000")
})
