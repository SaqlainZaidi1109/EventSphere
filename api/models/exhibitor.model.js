import mongoose from "mongoose";

const exhibitorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true})

const Exhibitor = mongoose.model('Exhibitor',exhibitorSchema)
export default Exhibitor;