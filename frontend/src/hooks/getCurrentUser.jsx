// import React, { useEffect } from 'react'
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// function getCurrentUser() {
//       const dispatch =useDispatch();
//       useEffect(async() => {
//         const fetchUser =async ()=>{
//             try {
//             const result = await axios.get("http://localhost:8000/api/user/current");
//             console.log(result);
      
//             dispatch(setUserData(result.data));
    
//             console.log(result.data);
//           } catch (err) {
//             console.log("current info erro",err);
//           }
//         }
//     fetchUser();
//   }, [])
  
// }
// export default getCurrentUser

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/usrSlice";

const getCurrentUser = ()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser =async ()=>{
      try{
        const result = await axios.get("http://localhost:8000/api/user/current",{
          withCredentials:true
        });
        
        console.log(result.data)
        dispatch(setUserData(result.data));
      }catch(err){
      console.log("ERROR:", err);
      console.log("STATUS:", err.response?.status);
      console.log("DATA:", err.response?.data);
        console.log("error is:",err);
      }
    }
    fetchUser();
  }, [])
  
}

export default getCurrentUser;