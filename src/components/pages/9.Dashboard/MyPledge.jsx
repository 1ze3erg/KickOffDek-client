import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown, BsPencil } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import ModalDetails from "./ModalDetails";

function MyPledge() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="w-3/4 ml-10 mt-12">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-medium">My Pledges</h1>
        </div>
      </div>
      <div className="mx-4 mt-10">
        <div className="">
          <div className="bg-green-100 text-pridark h-16 rounded-t-lg  flex items-center">
            <h1 className="px-3 text-lg font-medium">Funding Campaigns</h1>
          </div>
          <div className="border-b border-gray-300 h-14 my-3 grid grid-cols-10 px-7 gap-4 w-full items-center">
            <div className="col-span-6 flex flex-row items-center">
              <h1 className="font-semibold text-pridark">
                <span>Project.title</span>: <span className="font-normal text-prigreen">Reward.title</span>
              </h1>
            </div>
            <div className="col-span-2"> Pledged <span className="text-pripurple">$12,000</span> of <span className="text-prigreen">$20,000</span></div>
            <div className="col-span-1">Last date: <span className="text-pripurple">Dec 21 </span></div>
            <button
              className="inline-flex bg-clear mx-3 text-prigreen rounded-full h-8 px-3 justify-center items-center hover:bg-prilight"
              onClick={() => setOpenModal(true)}
            >
              Details
            </button>
            {openModal && <ModalDetails closeModal={setOpenModal} />}
          </div>
        </div>
      </div>
      <div className="mx-4 mt-20">
        <div className="">
          <div className="h-16 border-b border-gray-300 flex items-center">
            <h1 className="px-3 text-lg font-medium">Current Campaigns</h1>
          </div>
          <div className="flex flex-row my-5">
            <div className="border-b-2 w-32 h-8 text-center border-green-700">
              Projects
            </div>
            <div className="border-b-2 w-32 h-8 text-center border-gray-300">
              Waitlists
            </div>
          </div>
          
          <div className="border-b border-gray-300 h-14 my-3 grid grid-cols-10 px-7 gap-4 w-full items-center">
            <div className="col-span-6 flex flex-row items-center">
            <h1 className="font-semibold text-pridark">
                <span>Project.title</span>: <span className="font-normal text-prigreen">Reward.title</span>
              </h1>
            </div>
            <div className="col-span-2">0 pledged</div>
            <div className="col-span-1">Est ship: Dec 21</div>
            <button
              className="inline-flex bg-clear mx-3 text-prigreen rounded-full h-8 px-3 justify-center items-center hover:bg-prilight"
              onClick={() => setOpenModal(true)}
            >
              Details
            </button>
            {openModal && <ModalDetails closeModal={setOpenModal} />}
          </div>
        </div>
      </div>

      {/* <Link to="/edit-project/1" className="text-blue-500 underline">
        Go to Editor Project
      </Link>
      <br />
      <Link to="/profile/izeberg" className="text-blue-500 underline">
        Go to Profile
      </Link> */}
    </div>
  );
}

export default MyPledge;
