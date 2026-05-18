import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
    auther:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    
    ],
    mediaType:{
            type:String,
            enum:["image","video"],
            required:true
        },
    media:{
            type:String,
            required:ture
        },
    likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    expireAt: {
      type: Date,
      default: () => new Date(Date.now() + 24*60*60*1000), // 1 day from creation
    }

},{timestamps:true})

const Story = mongoose.model("Story",storySchema);

export default Story;