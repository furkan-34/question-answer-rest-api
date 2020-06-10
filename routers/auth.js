const express = require('express');
const {getUser, login, logout} = require('../controllers/auth');
const {getAccessToRoute} = require('../middlewares/authorization/auth');

const router = express.Router();

//api/auth


router.get("/profile", getAccessToRoute, getUser);
router.post("/login", login);
router.get("/logout", logout);




module.exports = router;