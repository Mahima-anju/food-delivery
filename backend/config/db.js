import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mahimaanju98:mahima123@cluster0.4cehawy.mongodb.net/fooddelivery').then(()=>console.log("DB Connected"));
}