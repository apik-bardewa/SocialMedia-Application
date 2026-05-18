import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Forgetpass() {
  const [step, setstep] = useState(1);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [otp, setotp] = useState()
  

  const emailHandler = async(e)=>{
    e.preventDefault();
     try{
      await axios.post("http://localhost:8000/api/auth/send-otp",{email});
     setstep(2);
     }catch(err){
      console.log(err);
     }
  }

  const otpHandler =async (e)=>{
    e.preventDefault();
    console.log(otp,email);
    console.log(typeof(otp));
    try{
      const result = await axios.post("http://localhost:8000/api/auth/valid-otp",{otp,email});
      console.log(result.data);
    setstep(3);
    console.log(result.data)
    }catch(err){
      console.log(err)
    }
  }

  const passwordHandler = (e)=>{
      e.preventDefault();
      try{
        axios.post("http://localhost:8000/api/auth/reset-password",{email,password});
      }catch(err){
        console.log(err);
      }
  }


  //step1handler
  // const handler1 =async ()=>{
  //      try{
  //        const result =await axios.post("http://localhost:8000/api/auth/send-otp",{email},{withCredentials:true});
         
  //        console.log(result.data);
  //      }catch(err){
  //       console.log("error = ",err);
  //      }
  // }
  //   //  step2handler
  //  const handler2 =async ()=>{
       
  //      try{
  //        const result =await axios.post("http://localhost:8000/auth/api/otpValidation",{otp},{withCredentials:true});
         
  //        console.log(result.data);
  //      }catch(err){
  //       console.log("error = ",err);
  //      }


  //     //  steo3handleer
  //     const handler3 = async ()=>{
        
  //      try{
  //        const result =await axios.post("http://localhost:8000/auth/api/reset-password",{password},{withCredentials:true});
  //        console.log(result.data);
  //      }catch(err){
  //       console.log("error = ",err);
  //      }
  // }
  // }

  return (
    <div>
      {/* for gmailui */}
      {step===1 && <div>
         <form onSubmit={emailHandler}  className=' text-black mt-30 bg-zinc-300 h-50 w-150 ml-[25%] pl-5 flex flex-col rounded-lg'>
          <p className='ml-40 text-xl font-bold mt-5 mb-5'>Password Reset Page</p>
           <input className='rounded-md ml-[20%] border-2 w-90 h-10 pl-3' onChange={(e)=>{setemail(e.target.value)}} type='email' placeholder='enter email for receive OTP'></input><br></br>
           <button type='submit' className='ml-[32%] bg-blue-500 text-white w-40 h-8 rounded-lg'>SEND OTP</button>
        </form>
        </div>
      }
      
      {/* for otp conformation */}
      {step===2 && <div>
         <form onSubmit={otpHandler} className=' text-black mt-30 bg-zinc-300 h-50 w-150 ml-[25%] pl-5 flex flex-col rounded-lg' >
          <p className='ml-40 text-xl font-bold mt-5 mb-5'>OTP Verification Page</p>
          <input className='rounded-md ml-[20%] border-2 w-90 h-10 pl-3' onChange={(e)=>{setotp(e.target.value)}} type='text' placeholder='enter OTP'></input>
          <button className=' mt-5 ml-[32%] bg-blue-500 text-white w-40 h-8 rounded-lg' type='submit'>CONFORM</button>
        </form>
        </div>
      }

      {/* for reset password */}
      {step===3 && <div>
         <form onSubmit={passwordHandler} className=' text-black mt-30 bg-zinc-300 h-60 w-150 ml-[25%] pl-5 flex flex-col rounded-lg'>
          <p className='ml-40 text-xl font-bold mt-5 mb-5'>Password Reset Page</p>
           <input className='rounded-md ml-[20%] border-2 w-90 h-10 pl-3' type='password' placeholder='enter new password'></input>
             <input className='rounded-md mt-5  ml-[20%] border-2 w-90 h-10 pl-3' onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='conform password(rewrite password'></input>
           <button className='mt-5 ml-[32%] bg-blue-500 text-white w-40 h-8 rounded-lg' type='submit'>Reset Password</button>
        </form>
        </div>
      }
    </div>
  )
}

export default Forgetpass;


// import React from 'react'

// function EmailHand() {
    
//   return (
//     <div>
//         <div className='h-50,w-300 bg-zinc-600'>
//             <form onSubmit={handlermeial}>
//                 <input type='email' placeholder='enter email for receive OTP'></input>
//                 <button type='submit'>SEND OTP</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default EmailHand