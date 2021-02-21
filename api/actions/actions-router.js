const express = require('express')  // MAIN IMPORT ( LIKE REACT )
const router = express.Router()     // CREATE NEW BRANCH / ROUTER
const actionsModel = require("./actions-model")



router.get("/actions", (req, res) => {
   const actions = actionsModel.get()
   res.json(actions)
})

module.exports = router             