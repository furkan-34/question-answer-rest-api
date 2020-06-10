const express = require('express');
const {getUser, login, logout, forgotPassword} = require('../controllers/auth');
const {getAccessToRoute} = require('../middlewares/authorization/auth');

const router = express.Router();

//api/auth


router.get("/profile", getAccessToRoute, getUser);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotpassword",forgotPassword)


module.exports = router;