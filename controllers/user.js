const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {
  // POST DATA
  // const name = "Furkan Ciğerlioğlu";
  // const email = "furkancigerlioglu@gmail.com";
  // const password = "12345";

  //async await

  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  });


  sendJwtToClient(user,res);


  return res.status(200).json({
    succes: true,
    data: user
  });


  return CustomError(error);
});

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find();

  return res.status(200).json({
    succes: true,
    data: users,
  });

  return CustomError(error);
  console.log(error);
});






const errorTest = (req, res, next) => {
  return next(new CustomError("Custom Error Message", 400));
};

module.exports = {
  getAllUsers,
  register,
  errorTest,

};
