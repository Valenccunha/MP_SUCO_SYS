const express = require("express");
const router = express.Router()

// Importando os controllers
const {indexPage} = require("../controllers/indexControllers")

router.get('/', (req,res)=>{
    indexPage(req,res);
})

module.exports = router;
