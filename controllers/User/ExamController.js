import { listPagination } from "../../config/constant.js";
import { errorResponse, successResponse, successWithPagination } from "../../helpers/ResponseBuilder.js";
import Exam from "../../models/Exam.js";
import { examResource, examShortResource } from "../../resource/ExamResource.js";

export const getExam = async(req,res) =>{
    try {
        const currentPage = parseInt(req.query.page) || 1;
        const perPage = req.query.pageLimit || listPagination;
        const allExams = await Exam.find()
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
            .populate('questions')
            .exec();
        const totalItems = await Exam.countDocuments();
        const totalPages = Math.ceil(totalItems / perPage);
        const data = await examShortResource(allExams);
        return res.status(200).json(successWithPagination(data, currentPage, totalPages));

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}
