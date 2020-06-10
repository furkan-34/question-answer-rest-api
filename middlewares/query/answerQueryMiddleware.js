const asyncErrorWrapper = require("express-async-handler");


const {populateHelper, paginationHelper} = require("./queryMiddlewareHelpers");

const answerQueryMiddleware = function( model, options ){

    return asyncErrorWrapper( async function(req,res,next) {

        // pagination from question's answer

        const {id} = req.params;

        const arrayName = "answers";

        const totalDocuments = (await model.findById(id))["answerCount"];

        const paginationResult =  await paginationHelper(totalDocuments,undefined,req);

        const startIndex = paginationResult.startIndex;
        const limit =  paginationResult.limit;

        let queryObject = {};

        queryObject[arrayName] = {$slice: [startIndex, limit]};

        let query = model.find({_id: id}, queryObject);

        // Population

        query = populateHelper(query, options.population);

        const queryResults = await query;

        res.queryResults = {
            success: true,
            pagination: paginationResult.pagination,
            data: queryResults
        };

        next();
    });
};



module.exports = {
    answerQueryMiddleware
};