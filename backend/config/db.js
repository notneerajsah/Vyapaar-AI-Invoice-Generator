import mongoose from "mongoose";
export const connectDB= async () => {
    await mongoose.connect('mongodb+srv://iamneerajkumarsah_db_user:Vyapaar123@cluster0.bmdeltz.mongodb.net/Vyapaar')
        .then(() => {console.log('DB CONNECTED')})
}