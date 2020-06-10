const asyncErrorWrapper = require("express-async-handler");


const {searchHelper, paginationHelper} = require("./queryMiddlewareHelpers");

const userQueryMiddleware = function( model, options ){

    return asyncErrorWrapper( async function(req,res,next) {

        //Initial Query
        
        let query = model.find();

        //Search

        query = searchHelper("name",query,req);

        
        // Pagination

        const totalDocuments = await model.countDocuments();

        const paginationResult =  await paginationHelper(totalDocuments,query,req);

        query = paginationResult.query;
        const pagination = paginationResult.pagination;

        const queryResults = await query;

        res.queryResults = {
            success: true,
            count: queryResults.length,
            pagination: pagination,
            data: queryResults
        }

        next();
    });
};



module.exports = {
    userQueryMiddleware
};