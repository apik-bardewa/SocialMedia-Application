
import mongoose from "mongoose";
import User from "../models/user.model.js";
import uploadOnCloudinary from "../config/cloudinary.js";

export const getcurrentUser = async (req, res) => {
  try {
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ msg: "Invalid userId" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ msg: error.message });
  }
};

export const suggestUser =async(req,res)=>{
  try {
    console.log(req.userId)
    const user = await User.find({_id:{$ne:req.userId}}).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

export const editProfile =async (req,res)=>{
  try {
    const {name,userName,bio,profession,gender} = req.body;
    const user =await User.findById(req.userId).select("-password");
    if(!user){
      return res.status(400).json({msg:"user not found"});
    }
    const sameuserName =await User.findOne({userName}).select("-password");
    if(sameuserName && sameuserName._id!=req.userId){
      return res.status(400).json({msg:"already user"});
    }

    let profileImage;
    if(req.file){
      profileImage =await uploadOnCloudinary(req.file.path)
    }
    user.name= name;
    user.userName=userName
    user.bio = bio;
    user.profession= profession;
    user.gender=gender;
    user.profileImage=profileImage;
    await user.save();
    return res.status(200).json("user data updated successfully");
  } catch (error) {
    return res.status(500).json({msg:"user data updation error",error:error});
  }
}


export const getProfile = async(req,res)=>{
  try {
    const userName = req.params.userName;
    const user =await User.findOne({userName}).select("-password");
    if(!user){
     return res.status(404).json({msg:"user not found"});
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json("getprofile error is",error);
  }

}

// export const getProfile = async (req, res) => {
//   try {
//     const userName = req.params.userName;

//     const user = await User.findOne({ username: userName }).select("-password");

//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     return res.status(200).json(user);

//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// };