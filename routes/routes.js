const express = require('express');

const router = express.Router();
const homeController  = require("../controller/homeController");
// home page render
router.get('/', homeController.home);
// create list 
router.post("/add-tasks",homeController.addTask);
// delte list
router.post("/delete-tasks",homeController.delete);





module.exports = router;