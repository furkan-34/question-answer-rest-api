const express = require('express');
const { askNewQuestion, getAllQuestions, getSingleQuestion, editQuestion, deleteQuestion, likeQuestion, undoLikeQuestion } = require('../controllers/question');

const {getAccessToRoute, getQuestionOwnerAccess} = require('../middlewares/authorization/auth');
const {checkQuestionExist} = require("../middlewares/database/databaseErrorHelpers");
const answer = require('./answer');



const router = express.Router();

//api/user
router.get("/", getAllQuestions);
router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/:id", checkQuestionExist, getSingleQuestion);
router.put("/:id/edit",[ getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], editQuestion);
router.delete("/:id/delete",[ getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], deleteQuestion);
router.get("/:id/like",[ getAccessToRoute, checkQuestionExist], likeQuestion);
router.get("/:id/undo_like",[ getAccessToRoute, checkQuestionExist], undoLikeQuestion);

// Routing to Answers
router.use("/:question_id/answers",checkQuestionExist,answer);

module.exports = router;









module.exports = router;