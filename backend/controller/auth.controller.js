
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import genToken from "../config/token.js";
import sendMail from "../config/Mail.js";
// import cookieParser from 'cookie-parser';
//error :- we need to add .js after each import of file 
//eg import user from './models/user.model"  = wrong
// eg import user from './models/user.model.js: =right

export const signUp = async (req,res)=>{
    try{
        const {name,userName,email,password} = req.body;
        let findByEmail=await User.findOne({email:email})
        if(findByEmail){
            res.status(201).json({msg:"email already exist"})
        }
         let findByuserName=await User.findOne({userName:userName})
        if(findByuserName){
            res.status(201).json({msg:"username is already exist"})
        }
        // if(password.length<6){
        //     return res.status(400).json({msg:"password must be atleast 6 characters"}) 
        // }
        const hashPassword =await bcrypt.hash(password,10);
        const user =await User.create({
            name,
            userName,
            email,
            password:hashPassword
        })
       const token = genToken(user._id)
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:10*365*24*60*60*1000,
        secure:false,
        sameSite:"lax"
    })
    return res.status(201).json(user)
    }catch(error){
        return res.status(500).json({msh:`error is detected that is ${error}`})
    }
}

//singin
export const signIn = async (req,res)=>{

    try{
        const {email,password} = req.body;
         const user =await User.findOne({email})
        if(!user){
            return res.status(201).json({msg:"no user found",success:false})
        }
        const isMatch =await bcrypt.compare(password,user.password)
       if(!isMatch){
          return res.status(400).json({msg:"incorrect password",success:false});
       }

       const token = await genToken(user._id);
       console.log("token is",token);
       res.cookie("token",token,{
        httpOnly:true,
        maxAge:10*365*24*60*60*1000,
        secure:false,
        sameSite:"lax"
    })

    return res.status(201).json(user);

    }catch(error){
        console.log(error);
        return res.status(500).json({msg:`signin error is detected that is ${error}`})
    }
}

export const signOut = (req,res)=> {
try{
    res.clearCookie("token")
    return res.status(200).json({msg:"sign out"})
}catch(error){
    return res.status(200).json({msg:`singout error is detected that is ${error}`})

}
}

export const sendOtp =async (req,res)=>{
    try{
      const {email} = req.body;
      const user=await User.findOne({email:email});
      if(!user){
        return res.status(400).json({msg:"user not found"});
      }
      const otp =Math.floor(1000 + Math.random() * 9000).toString();
      user.resetOtp =otp;
      user.otpExpire = Date.now()+ 5*60*1000;  //otp valid till 5 minute
      user.isOtpVerified = false;
      await user.save();
      await sendMail(email,otp);
    return res.status(200).json({massege:"email successfully set"});
    }catch(err){
        console.log("err is detected ",err);
    }
}

//otp validation 
 export const otpValidation = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(email,otp);
    console.log(typeof(otp));
    if (!email || !otp) {
      return res.status(400).json({ message: "Email or OTP required" });
    }

    const user = await User.findOne({email:email});
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otpExpire < Date.now() || user.resetOtp != otp) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.resetOtp = otp;
    user.otpExpire = undefined;
    user.isOtpVerified = true;

    user.save();

    return res.status(200).json({ message: "OTP verified" });

  } catch (err) {
    console.log("otp error", err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const resetPass = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.isOtpVerified) {
      // Return immediately after sending the response
     
      return res.status(400).json({ message: "Something went wrong" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user
    user.password = hashedPassword;
    user.isOtpVerified = false;

    await user.save();

    // Send the successful response
    return res.status(200).json({ message: "Password reset successfully" });

  } catch (err) {
    console.log("Error during password reset:", err);
    return res.status(500).json({ message: "In reset password, error is detected", err });
  }
};