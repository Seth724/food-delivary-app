import mongoose from "mongoose";

export const connectDB=async()=>{
  await mongoose.connect('mongodb+srv://sethna:sethna2002@cluster0.kguce.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}