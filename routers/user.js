const express = require('express');
const { getAllUsers,  register, imageUpload} = require('../controllers/user');
const {getAccessToRoute} = require('../middlewares/authorization/auth');

const profileImageUpload = require('../middlewares/libraries/productImageUpload');



const router = express.Router();

//api/user
router.get("/",getAllUsers);
router.post("/register",register);
router.post("/upload", [getAccessToRoute, profileImageUpload.single("profile_image")], imageUpload);





module.exports = router;