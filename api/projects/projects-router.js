const express = require('express')  // MAIN IMPORT ( LIKE REACT )
const router = express.Router()     // CREATE NEW BRANCH / ROUTER

router.get("/projects", (req, res) => {
	res.json({
		message: "Welcome to projects",
	})
})

module.exports = router     