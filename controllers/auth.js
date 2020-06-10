const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");

const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name,
    },
  });
};

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!validateUserInput(email, password)) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  // if there is no user
  if (!user) next(new CustomError("Kullanıcı adı veya parolanız hatalı", 400));

  // if password is wrong
  if (user && !comparePassword(password, user.password)) {
    return next(new CustomError("Please check your information again.", 400));
  }

  // if login is successfull, send JWT
  sendJwtToClient(user, res);

  return CustomError(error);
  console.log(error);
});


const logout = asyncErrorWrapper(async (req, res, next) => {

  const { NODE_ENV } = process.env;

  return res.status(200)
  .cookie({
    httpOnly: true,
    expires: new Date(Date.now),
    secure: NODE_ENV === "development" ? false : true
  }).json({
    success: true,
    message: "Logout succesfull."
  })

  return CustomError(error);
  console.log(error);
});

module.exports = {
  getUser,
  login,
  logout
};
