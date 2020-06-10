const express = require('express');
const { getAllUsers,  register} = require('../controllers/user');



const router = express.Router();

//api/user
router.get("/",getAllUsers);
router.post("/register",register);





module.exports = router;