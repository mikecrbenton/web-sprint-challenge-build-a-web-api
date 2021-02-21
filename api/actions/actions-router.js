const express = require('express')  // MAIN IMPORT ( LIKE REACT )
const router = express.Router()     // CREATE NEW BRANCH / ROUTER
const actionsModel = require("./actions-model")



router.get("/actions", (req, res) => {
   const actions = actionsModel.get()
   res.json(actions)
})

router.get("/actions/:id", async (req, res) => {

   // different way of accessing the params in express
   const id = req.params.id
   const action = await actionsModel.get(id) 
   console.log(action)

   if(action){
      res.json(action) }
   else {
      res.status(404).json( {message: "User not found"} ) }

})

module.exports = router             