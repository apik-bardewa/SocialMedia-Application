import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    saved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    reels:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reel"
    }],
    story:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Story"
    }],
    bio:{
      type:String,
      default:""
    },
    profession:{
      type:String,
      default:""
    },
    gender:{
      type:String,
      enum:["male","female"]
    },
    resetOtp:{
      type:String
    },
    otpExpire:{
      type:Date
    },
    isOtpVerified:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
