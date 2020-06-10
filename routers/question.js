const express = require('express');
const Question = require("../models/Question");

const { askNewQuestion, getAllQuestions, getSingleQuestion, editQuestion, deleteQuestion, likeQuestion, undoLikeQuestion } = require('../controllers/question');

const {getAccessToRoute, getQuestionOwnerAccess} = require('../middlewares/authorization/auth');
const {checkQuestionExist} = require("../middlewares/database/databaseErrorHelpers");
const answer = require('./answer');

const {questionQueryMiddleware} = require("../middlewares/query/questionQueryMiddleware");
const {answerQueryMiddleware} = require("../middlewares/query/answerQueryMiddleware");



const router = express.Router();


//api/user
router.get("/", 
questionQueryMiddleware(Question, {
    population: {
        path: "user",
        select: "name profile_image"
    }
}), getAllQuestions);

router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/:id", checkQuestionExist, answerQueryMiddleware(Question, {
    population: [
        {
            path: "user",
            select: "name profile_image"
        },
        {
            path: "answers",
            select: "content"
        }
    ]
}), getSingleQuestion);
router.put("/:id/edit",[ getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], editQuestion);
router.delete("/:id/delete",[ getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], deleteQuestion);
router.get("/:id/like",[ getAccessToRoute, checkQuestionExist], likeQuestion);
router.get("/:id/undo_like",[ getAccessToRoute, checkQuestionExist], undoLikeQuestion);

// Routing to Answers
router.use("/:question_id/answers",checkQuestionExist,answer);


module.exports = router;






