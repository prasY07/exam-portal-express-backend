import { listPagination } from "../../config/constant.js";
import { errorResponse, successResponse, successWithPagination } from "../../helpers/ResponseBuilder.js";
import Questions from "../../models/Questions.js";
import { questionResource, singleQuestionResource } from "../../resource/QuestionsResource.js";

export const questionList = async(req,res) =>{
    try {
        const currentPage = parseInt(req.query.page) || 1;
        const perPage = listPagination;
        const allQuestions = await Questions.find()
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
            .exec();
        const totalItems = await Questions.countDocuments();
        const totalPages = Math.ceil(totalItems / perPage);
        const data = await questionResource(allQuestions);
        return res.status(200).json(successWithPagination(data, currentPage, totalPages));

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}

export const create = async(req,res) =>{
    try {
        const {question,option_one,option_two,option_three,option_four,correct_option} = req.body;
        const newQuestion = new Questions({question,option_one,option_two,option_three,option_four,correct_option});
        await newQuestion.save();
        const createdQuestion = await singleQuestionResource(newQuestion);
        return res.status(200).json(successResponse(createdQuestion));
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}


export const update = async(req,res) =>{
    try {
        const questionId = req.params.id;
        const getQuestion = await Questions.findById(questionId);
        if (!getQuestion) {
            return res.status(500).json(errorResponse("Invalid Question"));

        }
        const {question,option_one,option_two,option_three,option_four,correct_option} = req.body;
        getQuestion.question = question;
        getQuestion.option_one = option_one;
        getQuestion.option_two = option_two;
        getQuestion.option_three = option_three;
        getQuestion.option_four = option_four;
        getQuestion.correct_option = correct_option;

        await getQuestion.save();
        console.log("getQuestion",getQuestion);
        const updatedQuestion = await singleQuestionResource(getQuestion);
        return res.status(200).json(successResponse(updatedQuestion));
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }

}

export const info = async(req,res) => {
    try{
        const questionId = req.params.id;
        const getQuestion = await Questions.findById(questionId);
        if (!getQuestion) {
            return res.status(500).json(errorResponse("Invalid Question"));

        }
        const question = await singleQuestionResource(getQuestion);
        return res.status(200).json(successResponse(question));
    }catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}

export const deleteQuestion = async(req,res) =>{
    try {

        const questionId = req.params.id;
        const deletedQuestion = await Questions.deleteOne({ _id: questionId });
        if (deletedQuestion.deletedCount === 1) {
        return res.status(200).json(successResponse(null,"Question delete successfully"));
        }
        return res.status(404).json(errorResponse("Question not found"));

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }

}
