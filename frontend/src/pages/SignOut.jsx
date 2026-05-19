import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SignOut() {
    const navigate = useNavigate();
   const YesButton = async()=>{
      const result = await axios.get("http://localhost:8000/api/auth/signout",{withCredentials:true});
      console.log("error isdetected",result);

      navigate("/signin");
   }

   const NoButton=()=>{
       navigate("/");
   }
  return (
    <div className=' h-[100px] w-[300px] ml-[40%] mt-[10%]'>
        <form>
            <label className='text-lg font-bold ml-9'>Do you want to singout ?</label><br></br>
            <div className='flex gap-4 ml-20 mt-4'>
              <button onClick={YesButton} type="button" className='bg-blue-500 text-white px-3 py-1 rounded-sm hover:text-lg font-bold'>Yes</button>
              <button onClick={NoButton} type="button" className='bg-blue-500 text-white px-3 py-1 rounded-sm hover:text-md font-bold '>No</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default SignOut