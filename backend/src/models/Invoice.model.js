import mongoose from "mongoose";

const invoiceSchema=new mongoose.Schema({
    bill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bill',
        required:true,
    },
    payment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Payment',
        required:true,
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true,
    },
    paymentMethod:{
        type:String,
        required:true,
    },
    totalAmount:{
        type:Number,
        required:true,
    },
    issuedAt:{
        type:Date,
        default:Date.now,
    }
},{timestamps:true});
const  Invoice =mongoose.model("Invoice",invoiceSchema);
export default Invoice;