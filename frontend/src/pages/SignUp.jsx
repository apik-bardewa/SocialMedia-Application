import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setUserData} from '../redux/usrSlice';
const Signup = () => {
  const [name, setname] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const handlerSignup = async (e) => {
    e.preventDefault(); // ✅ stop page reload
    try {
      const result = await axios.post(
        "http://localhost:8000/api/auth/signup", // ✅ fixed URL
        { name, userName, email, password },
        { withCredentials: true }
      );
      dispatch(setUserData(result.data))
      console.log(result.data); // ✅ now works
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form
        className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6"
        onSubmit={handlerSignup} // ✅ handle form here
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          SignUp Page
        </h2>

        <p className="text-sm text-center text-gray-500 mt-1">
          Join us and start your journey 🚀
        </p>

        <button
          type="button"
          className="w-full mt-5 py-3 px-4 flex items-center justify-center gap-3 
                     border border-gray-300 rounded-lg bg-white 
                     hover:bg-gray-50 transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M24 9.5c3.54 0 6.36 1.22 8.27 3.22l6.16-6.16C34.5 2.7 29.7 1 24 1 14.7 1 6.7 6.8 3.3 15.1l7.6 5.9C12.7 14.1 17.9 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.8h12.5c-.5 2.6-2 4.8-4.2 6.3l6.5 5c3.8-3.5 6.3-8.7 6.3-15z"/>
            <path fill="#FBBC05" d="M10.9 28.9c-.5-1.5-.8-3.1-.8-4.9s.3-3.4.8-4.9l-7.6-5.9C1.2 16.5 0 20.1 0 24s1.2 7.5 3.3 10.8l7.6-5.9z"/>
            <path fill="#EA4335" d="M24 47c6.5 0 12-2.1 16-5.7l-6.5-5c-1.8 1.2-4.2 1.9-9.5 1.9-6.1 0-11.3-4.6-13.1-10.5l-7.6 5.9C6.7 41.2 14.7 47 24 47z"/>
          </svg>
          <span className="text-gray-700 font-medium">
            Sign up with Google
          </span>
        </button>

        <div className="flex items-center my-5 text-gray-400 text-sm">
          <div className="flex-1 border-t"></div>
          <span className="px-3">Or continue with email</span>
          <div className="flex-1 border-t"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={(e) => setname(e.target.value)}
          />

          <input
            type="text"
            placeholder="UserName"
            className="p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={(e) => setuserName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2 accent-purple-500" />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-5 py-3 rounded-lg text-white font-medium 
                     bg-gradient-to-r from-indigo-500 to-purple-600 
                     hover:from-indigo-600 hover:to-purple-700 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-purple-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;

// import React from 'react'
// import { useState } from 'react'
// function SignUp() {
//   const [leftstate, setleftstate] = useState(false)
//   const handleLeft = ()=>{
//     setleftstate(!leftstate);
   
//   }
//   return (
//     <div className='rounded-lg p-2'>
//         <div className='flex gap-5 bg-zinc-500 text-white w-[50%] mx-[20%] mt-10 h-130'>
//           {/* left */}
//           <div className='w-[50%] bg-zinc-600 relative' >
//                 {/* leftside */}
//               <div className={`relative top-0  ${leftstate ? "hidden":"block"}`}>
//                 <p className=' mt-2 flex justify-center text-lg font-bold'>SignUp page</p>
//                 <form className='flex flex-col px-3 pt-5 mt-10 ml-10'>
//                   User :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%] ' type='text' placeholder='enter your name'></input>
//                   UserName :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='text' placeholder='enter your username'></input>
//                   Email :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='email' placeholder='enter your email'></input>
//                   Password :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='password' placeholder='enter your password'></input>
//                   <label className='mt-5 ml-2 hover:font-bold'>I have an account?<a href='/login' className='hover:underline text-yellow-300'>Login</a></label>
//                 </form>
//               </div>
//               {/* rightside */}
//               <div className={`bg-pink-700 relative top-0  ${leftstate ? "block":"hidden"}`}>
//                 <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg' alt='image' className='mt-20 p-1'></img>
//                 <button className='bg-white mt-5 ml-30 mb-2 rounded-lg text-black p-2' onClick={handleLeft}>Swap-Box</button>
//               </div>
//           </div>
        
//           <div className='w-[50%]' >
//               {/* rightside */}
//               <div className={`bg-pink-700 relative top-0 ${leftstate ? "hidden":"block"}`}>
//                 <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg' alt='image' className='mt-20 p-1'></img>
//                 <button className='bg-white mt-5 ml-30 mb-2 rounded-lg text-black p-2' onClick={handleLeft}>Swap-Box</button>
//               </div>
//               {/* leftside */}
//               <div className={`relative top-0 ${leftstate ? "block":"hidden"}`}>
//                  <p className=' mt-2 flex justify-center text-lg font-bold'>SignUp page</p>
//                 <form className='flex flex-col px-3 pt-5 mt-10 ml-10'>
//                   User :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='text' placeholder='enter your name'></input>
//                   UserName :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='text' placeholder='enter your username'></input>
//                   Email :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='email' placeholder='enter your email'></input>
//                   Password :<input className='border-2 rounded-lg pl-3 hover:text-lg w-[80%]' type='password' placeholder='enter your password'></input>
//                   <label className='mt-5 ml-2 hover:font-bold'>I have an account?<a href='/login' className='hover:underline text-yellow-300'>Login</a></label>
                  
//                 </form>
//               </div>
//           </div>
//         </div>
        
//     </div>
//   )
// }

// export default SignUp
// // // <div className="bg-animate min-h-screen flex items-center justify-center p-4">
// //         <div className="bg-black bg-opacity-80 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-md w-full">
// //             <h1 className="text-4xl font-extrabold text-center mb-8 neon-text">Extreme Signup</h1>
// //             <form className="space-y-6">
// //                 <div className="relative">
// //                     <input type="text" placeholder="Username" className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300">
// //                     <i className="fas fa-user absolute right-3 top-3 text-pink-500"></i>
// //                 </div>
// //                 <div className="relative">
// //                     <input type="email" placeholder="Email" className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300">
// //                     <i className="fas fa-envelope absolute right-3 top-3 text-pink-500"></i>
// //                 </div>
// //                 <div className="relative">
// //                     <input type="password" placeholder="Password" className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300">
// //                     <i className="fas fa-lock absolute right-3 top-3 text-pink-500"></i>
// //                 </div>
// //                 <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
// //                     Sign Up
// //                 </button>
// //             </form>
// //             <div className="mt-8 text-center">
// //                 <p className="text-gray-400">Or sign up with</p>
// //                 <div className="flex justify-center space-x-4 mt-4">
// //                     <a href="#" className="text-blue-500 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"><i className="fab fa-facebook-f text-2xl"></i></a>
// //                     <a href="#" className="text-blue-400 hover:text-blue-500 transform hover:scale-125 transition-all duration-300"><i className="fab fa-twitter text-2xl"></i></a>
// //                     <a href="#" className="text-red-500 hover:text-red-600 transform hover:scale-125 transition-all duration-300"><i className="fab fa-google text-2xl"></i></a>
// //                 </div>
// //             </div>
// //         </div>
// //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
// //             <i className="fas fa-meteor text-yellow-500 text-4xl absolute animate-ping" style="top: 10%; left: 5%;"></i>
// //             <i className="fas fa-star text-blue-500 text-2xl absolute animate-pulse" style="top: 20%; right: 10%;"></i>
// //             <i className="fas fa-rocket text-red-500 text-5xl absolute float" style="bottom: 15%; left: 15%;"></i>
// //             <i className="fas fa-planet-ringed text-purple-500 text-6xl absolute rotate" style="top: 40%; right: 20%;"></i>
// //         </div>
// //     </div>





