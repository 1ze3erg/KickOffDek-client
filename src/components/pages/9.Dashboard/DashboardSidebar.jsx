import { FiHome, FiSettings } from "react-icons/fi";
import { BsGift , BsHeart} from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineFund } from "react-icons/ai";
import React, {useState} from 'react';





function DashboardSidebar({Home , Preference , MyPledge, SavedProject , MyProject , CurrentProject}) {
    

    return (
        <div className="mx-4 flex flex-col items-start mt-5 gap-5 text-lg font-semibold">
            <button onClick={()=>{Home(true); Preference(false); MyPledge(false); SavedProject(false); MyProject(false); CurrentProject(false) }} className="flex flex-row gap-2 items-center"><FiHome />Home</button>
            <button onClick={()=>{Home(false); Preference(true); MyPledge(false); SavedProject(false); MyProject(false); CurrentProject(false) }} className="flex flex-row gap-2 items-center"><FiSettings /> Preference</button>
            <button onClick={()=>{Home(false); Preference(false); MyPledge(true); SavedProject(false); MyProject(false); CurrentProject(false) }} className="flex flex-row gap-2 items-center"><BsGift />My Pledge</button>
            <button onClick={()=>{Home(false); Preference(false); MyPledge(false); SavedProject(true); MyProject(false); CurrentProject(false) }} className="flex flex-row gap-2 items-center"><BsHeart />Saved Project</button>
            
            <h1>Creating</h1>
            <button onClick={()=>{Home(false); Preference(false); MyPledge(false); SavedProject(false); MyProject(true); CurrentProject(false) }} className="flex flex-row gap-2 items-center"><MdOutlineDashboardCustomize />My Project</button>
            {/* <button onClick={()=>{Home(false); Preference(false); MyPledge(false); SavedProject(false); MyProject(false); CurrentProject(true) }} className="flex flex-row gap-2 items-center"><AiOutlineFund />Current Project</button> */}
            <button className="mt-10 px-2 ml-10 h-12 rounded-xl bg-priorange text-white hover:bg-red-500">Create Campaign</button>
        </div>
    );
}

export default DashboardSidebar;
