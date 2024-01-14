import mongoose from "mongoose";
import { Schema } from "mongoose";


const examSchema = new Schema({
    name: {
        type:String,
        required:true,
        minlength:5,
        maxlength:100
        
    },
   
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Questions'
        }
    ],

   
    
});
export default mongoose.model("Exams", examSchema);

 