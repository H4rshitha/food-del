/*
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://idkbrogetlost_db_user:83104@cluster0.awbiobu.mongodb.net/foodDel"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
     // STOP server if DB fails
  }
};
*/



import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://harshithapalaram09_db_user:8310419@cluster0.he5amrl.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}

    
