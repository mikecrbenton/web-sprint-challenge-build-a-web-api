const actionsModel = require('../actions/actions-model')


// HIGHER ORDER FUNCTION ( IN CASE PARAMETERS NEED TO BE PASSED )
const checkActionID = () => {
   return (req,res,next) => {
      actionsModel.get(req.params.id)
         .then((action) => {
            if (action) {
               req.action = action;
               next() 
            } else {
               res.status(404).json({
                  message: "User not found",
               })
            }
         })
         .catch((error) => {
            console.log(error)
            res.status(500).json({
               message: "Error retrieving the action",
            })
         })
   }
}

function checkActionData() {
   return (req,res,next) => {
      if (!req.body.project_id || !req.body.description || !req.body.notes) {
         return res.status(400).json({message: "Missing a required field" })
      }
      next()
   }
}



module.exports = {
   checkActionID,
   checkActionData
}