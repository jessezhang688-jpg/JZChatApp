import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";
import User from "./models/UserModels.js"
import path from 'path';
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
    cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    }
));

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const server = app.listen(port, ()=>{
    console.log(`Server is running! at http://localhost:${port}`);
})

mongoose.connect(databaseURL).then(()=>console.log('DB connected!')).catch(err=>console.log(err.message));




/*const userLoginTry = await User.findById({
    email: 'jessezhang688@gmail.com'
}).exec();
console.log(userLoginTry);*/