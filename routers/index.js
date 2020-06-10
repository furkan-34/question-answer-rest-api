const express = require('express');
const auth = require('./auth');
const user = require('./user');




const router = express.Router();
// /api

router.use("/auth",auth);
router.use("/user",user);







module.exports = router;