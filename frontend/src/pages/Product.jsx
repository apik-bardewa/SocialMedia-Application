import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
function  Product() {
  const [obj1, setobj1] = useState({});

  useEffect(()=>{
     axios.get("http://localhost:8000/product").then((response)=>{
        setobj1(response.data);
     }).catch((err)=>{
        console.log("error occured",err);
     })
  },[])

  return (
    <div>
        <div className='flex bg-zinc-600 text-green-600 w-100 h-70 flex justify-between'>
            <label>{obj1.name}</label><br></br>
            <label>{obj1.price}</label>
            <img src={obj1.imglink} alt='user1' className='w-30 h-50'></img>
        </div>
    </div>
  )
}

export default Product