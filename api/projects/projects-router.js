const express = require('express')  
const router = express.Router()   
const projectsModel = require("./projects-model")


router.get("/api/projects", async (req, res) => {
   const projects = await projectsModel.get()
   res.json(projects)
})

router.get("/api/projects/:id", async (req, res) => {

   const project = await projectsModel.get(req.params.id) 

   if(project){
      res.json(project) }
   else {
      res.status(404).json( {message: "User not found"} ) }
})

router.get("/api/projects/:id/actions", async (req, res) => {

   const projectActions = await projectsModel.getProjectActions(req.params.id) 

   if(projectActions){
      res.json(projectActions) }
   else {
      res.status(404).json( {message: "Actions not found"} ) }
})

router.post("/api/projects", async (req,res) => {
   const newProject = await projectsModel.insert( {
      name: req.body.name,
      description: req.body.description
   })
   res.status(201).json(newProject)
})

router.put("/api/projects/:id", async (req,res) => {
   const updatedProject = await projectsModel.update( req.params.id, {
      name: req.body.name,
      description: req.body.description
   })
   res.status(201).json(updatedProject)
})

router.delete("/api/projects/:id", async (req,res) => {

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