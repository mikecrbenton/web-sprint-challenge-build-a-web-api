const express = require('express')  
const router = express.Router()   
const projectsModel = require("./projects-model")


router.get("/projects", async (req, res) => {
   const projects = await projectsModel.get()
   res.json(projects)
})

router.get("/projects/:id", async (req, res) => {

   const project = await projectsModel.get(req.params.id) 

   if(project){
      res.json(project) }
   else {
      res.status(404).json( {message: "User not found"} ) }
})

router.post("/projects", async (req,res) => {
   const newProject = await projectsModel.insert( {
      name: req.body.name,
      description: req.body.description
   })
   res.status(201).json(newProject)
})

router.put("/projects/:id", async (req,res) => {
   const updatedProject = await projectsModel.update( req.params.id, {
      name: req.body.name,
      description: req.body.description
   })
   res.status(201).json(updatedProject)
})

router.delete("/projects/:id", async (req,res) => {

   const user = await projectsModel.get(req.params.id)

   if(user) {
      console.log(user)
      await projectsModel.remove(user.id)
      res.status(204).end() // successful empty response
   }else{
      res.status(404).json( {message: "User not found"} ) 
   }

})

module.exports = router     