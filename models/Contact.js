import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    
});
export default mongoose.model("Contact", contactSchema);

 