const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");

const sendEmail = require('../helpers/libraries/sendEmail');

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

const forgotPassword = asyncErrorWrapper(async (req, res, next) => {

  const resetEmail  = req.body.email;


  const user = await User.findOne({ email: resetEmail });

  if(!user){
    return next(new CustomError("There is a no user with that email",400));
  }

  const resetPasswordToken = user.getResetPasswordTokenFromUser();

  await user.save();

  // send email
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS} = process.env;

  const resetPasswordUrl = `http://localhost:5000/api/auth/forgotpassword?resetPasswordToken=${resetPasswordToken}`;

  const emailTemplate = `
  <h3> Reset Your Password </h3>
  <p> This <a href = '${resetPasswordUrl}' target = '_blank'>link</a> will expire in 1 hour </p>    
  `;

  try {

    await sendEmail({
      from: SMTP_USER,
      to: resetEmail,
      subject: "Reset Your Password",
      html: emailTemplate
    });

    res.status(200).json({
      success: true,
      message: "Token Sent To Your Email"
    });

  } catch (error) { 
    // Undo changes and save
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    console.log(error);
    await user.save();

    return next(new CustomError("Email Could Not Be Sent",500));
  }

  

});

module.exports = {
  getUser,
  login,
  logout,
  forgotPassword
};
