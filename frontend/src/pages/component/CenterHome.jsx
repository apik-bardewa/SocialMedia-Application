import React from "react";
import Cart from "./Cart";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import './style/slide.css';
const posts = [
  { id: 1, user: "Alice", content: "My first post!", likes: 10, comments: 2 },
  { id: 2, user: "Bob", content: "Beautiful sunset today.", likes: 25, comments: 5 },
];

function CenterHome() {
  return (
    <div className="h-200 gap-2 bg-zinc-600 text-white w-[40%]">

      {/* stories */}
      <div className="flex overflow-x-auto gap-4 px-2 py-2 no-scrollbar">
          {[1,2,3,4,5,6,7,8,9,10,11].map((item, index) => (
      <div key={index} className="flex flex-col items-center min-w-[70px]">
        <Cart />
        <label className="text-xs mt-1">mr.john</label>
      </div>
      ))}
    </div><hr></hr>
      
     
      {/* profile */}
      <div className="h-screen text-black overflow-y-auto bg-gray-100 p-1 no-scrollbar">
        {[1,2,3,4].map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow-sm mb-[2px] overflow-hidden" >
        {/* HEADER: profile info */}
        <div className="flex items-center px-3 py-2">
          <Cart /> {/* Profile picture */}
          <div className="flex flex-col ml-2">
            <span className="text-sm font-semibold">mr.john</span>
            <span className="text-xs text-gray-500">At Pokhara-Nepal</span>
          </div>
          <div className="ml-auto">
            <BsThreeDots />
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[400px]">
          <img src="https://images.pexels.com/photos/36135026/pexels-photo-36135026.jpeg"
          className="w-full h-full object-cover"/>
      </div>

      {/* ACTIONS: like, comment, share, bookmark */}
      <div className="flex justify-between px-3 py-2">
        <div className="flex gap-4">
          <AiOutlineLike size={26} className="cursor-pointer hover:scale-125" />
          <FaRegCommentDots size={26} className="cursor-pointer hover:scale-125" />
          <FaShare size={26} className="cursor-pointer hover:scale-125" />
        </div>
        <FaRegBookmark size={26} className="cursor-pointer hover:scale-125" />
      </div>

      {/* CAPTION */}
      <div className="px-3 pb-3">
        <span className="text-sm">
          <span className="font-semibold mr-2">mr.john</span>
          Even still waters hold stories
        </span>
      </div>
    </div>
       ))}
</div>
    </div>
   
  );
}

export default CenterHome;