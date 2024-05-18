import mongoose from "mongoose";

//creating rules that user needs to follow in order to create the accout
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true 
    },
    
}, {timestamps:true}) //reason to add timestamp is that we need two things while creating a user, time of creation and time of update.

//after creating schema we need to create a model
const User  = mongoose.model('User',userSchema)
//we need to export model User so we can use it at other places aswell
export default User;