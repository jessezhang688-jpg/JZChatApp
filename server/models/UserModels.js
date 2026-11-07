import mongoose from "mongoose";
import {genSalt} from "bcrypt";
import { hash } from "bcrypt";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Email is Required."],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password is Required."],
    },
    firstName:{
        type: String,
        required: false,
    },
    lastName:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    },
    color:{
        type: Number,
        required: false,
    },
    ProfileSetup:{
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function () {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
});

const User = mongoose.model("Users", userSchema);

export default User;