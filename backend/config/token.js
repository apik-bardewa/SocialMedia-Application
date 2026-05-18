
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const genToken =(userId)=>{
    try{
     const token = jwt.sign({userId},process.env.SECRET,{expiresIn:"10y"})
     return token

    }catch(error){
        console.log(error);
    }
}

export default genToken;


//error may occured is that jwt.sign() is not asynchronous.
//  not need to write  await and async function
