const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers");



const getAllUsers = asyncErrorWrapper(async (req, res, next) => {


  return res.status(200).json(res.queryResults);

 
});


const getSingleUser = asyncErrorWrapper( async (req, res, next) => {

  const {id} = req.params;

  const user = await User.findById(id);

  if(!user){
    return next(new CustomError("There is no such user with that id",400));
  }

  return res.status(200).json({
    succes: true,
    data: user
  });

  
})

















const errorTest = (req, res, next) => {
  return next(new CustomError("Custom Error Message", 400));
};

module.exports = {
  getAllUsers,
  getSingleUser,
  errorTest


};
