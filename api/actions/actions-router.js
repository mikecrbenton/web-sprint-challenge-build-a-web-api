const express = require('express')  // MAIN IMPORT ( LIKE REACT )
const router = express.Router()     // CREATE NEW BRANCH / ROUTER
const actionsModel = require("./actions-model")


router.get("/actions", async (req, res) => {
   const actions = await actionsModel.get()
   res.json(actions)
})

router.get("/actions/:id", async (req, res) => {

   const id = req.params.id
   const action = await actionsModel.get(id) 

   if(action){
      res.json(action) }
   else {
      res.status(404).json( {message: "User not found"} ) }

})

router.post("/actions", async (req,res) => {
   const newAction = await actionsModel.insert( {
      project_id: req.body.project_id,
      description: req.body.description,
      notes: req.body.notes
   })
   res.status(201).json(newAction)
})

router.put("/actions/:id", async (req,res) => {
   const updatedAction = await actionsModel.update( req.params.id, {
      project_id: req.body.project_id,
      description: req.body.description,
      notes: req.body.notes
   })
   res.status(201).json(updatedAction)
})

router.delete("/actions/:id", async (req,res) => {

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

