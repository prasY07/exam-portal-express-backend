import { listPagination } from "../../config/constant.js";
import { errorResponse, successResponse, successWithPagination } from "../../helpers/ResponseBuilder.js";
import Exam from "../../models/Exam.js";
import { examResource, singleExamResource } from "../../resource/ExamResource.js";

export const examList = async(req,res) =>{
    try {
        const currentPage = parseInt(req.query.page) || 1;
        const perPage = listPagination;
        const allExams = await Exam.find()
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
            .exec();
        const totalItems = await Exam.countDocuments();
        const totalPages = Math.ceil(totalItems / perPage);
        const data = await examResource(allExams);
        return res.status(200).json(successWithPagination(data, currentPage, totalPages));

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}

export const examCreate = async(req,res) =>{
    try {
        const {name} = req.body;
        const newExam = new Exam({name});
        await newExam.save();
        const createdExam = await singleExamResource(newExam);
        return res.status(200).json(successResponse(createdExam));
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}


export const examUpdate = async(req,res) =>{
    try {
        const examId = req.params.id;
        const getExam = await Exam.findById(examId);
        if (!getExam) {
            return res.status(500).json(errorResponse("Invalid Exam"));

        }
        const {name} = req.body;
        getExam.name = name;
        await getExam.save();
        const updatedQuestion = await singleExamResource(getExam);
        return res.status(200).json(successResponse(updatedQuestion,"Exam updated successfully"));
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }

}

export const examInformation = async(req,res) => {
    try{
        const examId = req.params.id;
        const getExam = await Exam.findById(examId);
        if (!getExam) {
            return res.status(500).json(errorResponse("Invalid Exam"));

        }
        const exam = await singleExamResource(getExam);
        return res.status(200).json(successResponse(exam));
    }catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}

export const examDelete = async(req,res) =>{
    try {

        const examId = req.params.id;
        const deletedExam = await Exam.deleteOne({ _id: examId });
        if (deletedExam.deletedCount === 1) {
        return res.status(200).json(successResponse(null,"Exam deleted successfully"));
        }
        return res.status(404).json(errorResponse("Question not found"));

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }

}
