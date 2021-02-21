const express = require('express') 
const router = express.Router()     
const actionsModel = require("./actions-model")
const projectsModel = require("../projects/projects-model")
const { checkActionID, checkActionData } = require("../middleware/validate")

router.get("/api/actions", async (req, res) => {

   const actions = await actionsModel.get()

   if( actions.length > 0 ){
      res.json(actions)
   }else if( actions.length === 0){
      res.json({})
   }else {
      res.status(404).json( {message: "Action not found"} ) 
   }
})

router.get("/api/actions/:id", checkActionID(), (req, res) => {
      // ID CHECK IN VALIDATE MIDDLEWARE
      res.status(200).json(req.action) 
})

router.post("/api/actions", checkActionData(), async (req,res) => {

   const projectId = await projectsModel.get(req.body.project_id)

   if(projectId){
      const newAction = await actionsModel.insert( {
         project_id: req.body.project_id,
         description: req.body.description,
         notes: req.body.notes
      })
      res.status(201).json(newAction)
   }else{
      res.status(404).json( {message: "There is no project with that ID"} ) 
   }
})

router.put("/api/actions/:id", async (req,res) => {
   const updatedAction = await actionsModel.update( req.params.id, {
      project_id: req.body.project_id,
      description: req.body.description,
      notes: req.body.notes
   })
   res.status(201).json(updatedAction)
})

router.delete("/api/actions/:id", async (req,res) => {

   const user = await actionsModel.get(req.params.id)

   if(user) {
      console.log(user)
      await actionsModel.remove(user.id)
      res.status(204).end() // successful empty response
   }else{
      res.status(404).json( {message: "User not found"} ) 
   }

})

module.exports = router     

