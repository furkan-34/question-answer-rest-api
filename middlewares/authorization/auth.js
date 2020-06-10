const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const asyncErrorWrapper = require("express-async-handler");
const User = require("../../models/User");

const {isTokenIncluded, getAccessTokenFromHeader} = require('../../helpers/authorization/tokenHelpers')


// get access controll and if it has token or not 
const getAccessToRoute = (req, res, next) => {

  const { JWT_SECRET_KEY } = process.env;
  // Token
  if (!isTokenIncluded(req)) {
    // 401 unauthorized
    //403 forbidden

    return next(new CustomError("You are not allowed to view this page", 401));
  }



  const accessToken = getAccessTokenFromHeader(req);

  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(new CustomError("You are not authorizated person to view this page.",401));
    }

    // change user's id and name from simple to encoded
    req.user = {
      id: decoded.id,
      name: decoded.name,
      
    }
  
    next();
  });



};


const getAdminAccess = asyncErrorWrapper( async (req,res,next) => {
  
  const {id} = req.user;

  const user = await User.findById(id);

  if(user.role !== "admin"){
    return next( new CustomError("Only Admins can access this route"),403);
  }

  next();
})



module.exports = {
  getAccessToRoute,
  getAdminAccess
};
