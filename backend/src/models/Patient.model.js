import mongoose from "mongoose";

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
},{
    timestamps:true
});

const Patient=mongoose.model("Patient",patientSchema);
export default Patient;