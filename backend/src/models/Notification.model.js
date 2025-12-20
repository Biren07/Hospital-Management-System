import mongoose from "mongoose";

const notificationSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    type:{
        type:String,
        enum:['email','sms','system'],
        required:true,
    },
    title:{
        type:String,
    },
    message:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','sent','failed'],
        default:'sent',
    },
},{timestamps:true});

export const Notification=mongoose.model("Notification",notificationSchema);
export default Notification;