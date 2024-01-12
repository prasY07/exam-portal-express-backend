import mongoose from "mongoose";
import { Schema } from "mongoose";


const questionSchema = new Schema({
    question: {
        type:String,
        required:true,
        minlength:5,
        maxlength:100
        
    },
    option_one: {
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },
    option_two: {
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },
    option_three: {
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },
    option_four: {
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },

    correct_option: {
        type: String,
        enum: ['option_one', 'option_two', 'option_three', 'option_four'],
        required: true
    },
    
});
export default mongoose.model("Questions", questionSchema);

 