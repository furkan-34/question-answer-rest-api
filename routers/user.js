const express = require('express');
const { getAllUsers, getSingleUser } = require('../controllers/user');
const {getAccessToRoute} = require('../middlewares/authorization/auth');
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers");

const User = require("../models/User");
const {userQueryMiddleware} = require("../middlewares/query/userQueryMiddleware");





const router = express.Router();

//api/user
router.get("/", userQueryMiddleware(User),getAllUsers);
router.get("/:id", checkUserExist, getSingleUser);








module.exports = router;