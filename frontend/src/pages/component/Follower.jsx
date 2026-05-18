import React from 'react'
import Cart from './Cart'
import { MdOutlineRestartAlt } from "react-icons/md";
import axios from 'axios';

function Follower() {
//   const getUser = async()=>{
//     const result= await axios.get("http://localhosst:8000/api/user/suggestUser");
//     return result; 
//   }
//   const userName = getUser.userName;
  return (
    <div>
      <div className='flex justify-between  w-90 mx-6'>
        <label className='flex'>
          <Cart/>
          <span className='ml-3 flex flex-col mt-3'>
            <label className='text-md font-bold hover:text-lg'>userName</label>
            <label className='text-sm'>Suggest for you</label>
          </span>
        </label>
        <button className='bg-blue-600 h-[70%] mt-6 mr-4 text-lg px-2 rounded-md hover:scale-110'>Follow</button>
      </div>
    </div>
  )
}

export default Follower