const CustomError = require('../../helpers/error/CustomError');
customErrorHandler = (err,req,res,next) => {
   
    let customError = err;
    console.log(err.name);

    if (err.name === "SyntaxError") {
        customError = new CustomError(err.name, 400)
    }

    if (err.name === "ValidationError") {
        customError = new CustomError(err.name, 400);
    }

    if (err.code === 11000) {
        // Dublicate key
        customError = new CustomError(
            "Duplicate key Found: Check your Input",
            400
        )
    }

    if(err.name === "CastError"){
        customError = new CustomError("Please provide a valid id",400);
    }

    console.log(customError.message,customError.status);
    res
    .status(customError.status || 500)
    .json({
        success: false,
        message: customError.message || "Internal Server Error"
    });
};

module.exports = customErrorHandler;