import React from "react";
import { IoHome } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const messages = [
  { id: 1, user: "Alice", text: "Hey, how are you?" },
  { id: 2, user: "Bob", text: "Check this out!" },
  { id: 3, user: "Charlie", text: "Let's meet tomorrow." },
];

function LeftHome() {
  return (
      <div className="bg-zinc-300 h-200 w-[30%] pl-5 flex flex-col gap-5">
        <h1 className="font-bold text-xl mt-3">Social-Media-App</h1>
        <span><label className="pl-0 mb-2"><hr></hr></label>
          <span className="flex"><label className="mt-1 mr-3"><IoHome /></label>
            <select className="text-lg hover:font-bold mb-3">
              <option value="">Home</option>
            </select>
          </span>
        </span>
        
        <span className="text-lg hover:font-bold flex"><label className="mt-2 mr-3"><FaFacebookMessenger /></label>messenger </span>

        <span className="text-lg hover:font-bold flex"><label className="mt-2 mr-3"><IoNotifications /></label>Notification</span>

        <span className="text-lg hover:font-bold flex"><label className="mt-2 mr-3"><IoSettingsSharp /></label>Setting</span>

        <span className="text-lg hover:font-bold flex"><label className="mt-2 mr-3"><FaPlus /></label>
            <select>
              <option value="">Create</option>
              <option className="bg-zinc-300">Reels</option>
              <option className="bg-zinc-300">Story</option>
              <option className="bg-zinc-300">Post</option>
            </select>
        </span>
      </div>
  );
}

export default LeftHome;