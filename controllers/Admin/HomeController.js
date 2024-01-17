import { errorResponse, successResponse } from "../../helpers/ResponseBuilder.js";
import Questions from "../../models/Questions.js";

export const homeData = async(req,res) =>{
    try{
        const data = {
            "question":await Questions.countDocuments(),
            "exams"    : 1
        };
return res.status(200).json(successResponse(data));
    }catch(err){
        console.error(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
       
    }
}