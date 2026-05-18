import mongoose from "mongoose";

const reelSchema = new mongoose.Schema({
      auther:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
          }],
          media:{
              type:String,
              required:ture
          },
          caption:{
              type:String
          },
          likes:[{
              type:mongoose.Schema.Types.ObjectId,
              ref:"User",
          }],
          comments:[{
              type:mongoose.Schema.Types.ObjectId,
              ref:"User",
          }]
},{timestamps:ture})

const Reel = mongoose.model("Reel",reelSchema)

export default Reel;