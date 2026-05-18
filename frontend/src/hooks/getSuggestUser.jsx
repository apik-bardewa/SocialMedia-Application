

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSuggestData} from "../redux/usrSlice";
const getSuggestUser = ()=>{
  const dispatch = useDispatch();
  const {userData} =useSelector(state=>state.user)
  useEffect(() => {
    const suggest =async ()=>{
      try{
        const result = await axios.get("http://localhost:8000/api/user/suggestUser",{
          withCredentials:true
        });
        
        console.log(result.data)
        dispatch(setSuggestData(result.data));
      }catch(err){
      console.log("ERROR:", err);
      console.log("STATUS:", err.response?.status);
      console.log("DATA:", err.response?.data);
        console.log("error is:",err);
      }
    }
    suggest();
  }, [userData])
  
}

export default getSuggestUser;