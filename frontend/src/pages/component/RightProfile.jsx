import React from 'react'
import Cart from './Cart'
import axios from 'axios';
import { MdOutlineRestartAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function RightProfile() {
  const navigate = useNavigate();
  const { userData } = useSelector(state => state.user);

  const handleNavigate = () => {
    if (userData?.userName) {
      navigate(`/getProfile/${userData.userName}`);
    }
  };

  return (
    <div>
      <div className='flex justify-between w-90 mx-6'>
        <div className='flex'>
          <Cart />
          <div className='ml-3 flex flex-col mt-3'>
            <span className='text-md font-bold'>I-am-user</span>
            <span
              className='text-sm hover:font-bold cursor-pointer'
              onClick={handleNavigate}
            >
              My account
            </span>
          </div>
        </div>

        <button className='bg-blue-600 h-[70%] mt-6 mr-4 text-lg px-2 rounded-md hover:scale-110'>
          <div className='flex'>
            <span>Switch</span>
            <span className='mt-1 ml-1'><MdOutlineRestartAlt /></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default RightProfile

