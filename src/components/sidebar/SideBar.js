import React, { useContext, useState } from "react";
import "./sidebar.css";
import { LuMenu } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { context } from "../../context/Context";
const SideBar = () => {
const [extended,setExtended]=useState(false)
const{onSent,prevPrompts,setReacentPrompt,newchat}=useContext(context)
const loadPrompt =async(prompt)=>{
  setReacentPrompt(prompt)
await onSent(prompt)
}

  return (
    <div className="sidebar">
      <div className="top">
        <LuMenu onClick={()=>setExtended(prev=>!prev)} size={20} className="menu"/>
        <div className="newchat" onClick={()=>newchat()}>
          <FiPlus size={20} />
          {extended ? <p>New Chats</p> : null}
        </div>
        {extended ? <div className="recent">
          <p className="recent_title">Recent</p>
          {
            prevPrompts.map((item,index)=>{
return(
  <div onClick={()=>loadPrompt(item)} className="recent_entry">
            <LuMessageSquare size={16} />
            <p>{item.slice(0,18)} ...</p>
          </div>
)
            })
          }
         
        </div> : null }
       
      </div>
      <div className="bottom">
        <div className="bottom_item  recent_entry">
          <IoHelpCircleOutline size={20} />
         {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom_item  recent_entry">
          <RxCounterClockwiseClock size={20} />
          {extended ? <p>Activity</p> : null}
          
        </div>
        <div className="bottom_item  recent_entry">
          <IoMdSettings size={20} />
          {extended ? <p>Settings</p> : null}
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
