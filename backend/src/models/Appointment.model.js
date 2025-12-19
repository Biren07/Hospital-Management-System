import mongoose from "mongoose";
import Patient from "./Patient.model";

const appointmentSchmea=new mongoose.Schema({
    Patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['pending','confirmed','completed'],
        default:'pending',
    }
},{timestamps:true});

const Appointment=mongoose.model("Appointment",appointmentSchmea);
export default Appointment;