const express = require('express');
const {register, editDetails, getUser, login, logout, forgotPassword, resetPassword, imageUpload} = require('../controllers/auth');
const {getAccessToRoute} = require('../middlewares/authorization/auth');
const profileImageUpload = require('../middlewares/libraries/productImageUpload');

const router = express.Router();

//api/auth

router.post("/register",register);
router.put("/edit", getAccessToRoute, editDetails)
router.get("/profile", getAccessToRoute, getUser);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotpassword",forgotPassword);
router.put("/resetpassword",resetPassword);
router.post("/upload", [getAccessToRoute, profileImageUpload.single("profile_image")], imageUpload);


module.exports = router;