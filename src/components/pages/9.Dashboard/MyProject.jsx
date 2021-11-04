import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown, BsPencil } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";

function MyProject() {
  return (
    <div>
      <nav className="my-10 flex flex-row justify-between items-center w-full">
        <div className="ml-10 flex flex-row ">
          <img
            src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1635934306/Roll-Up-both-UAV-02.252.jpg_fyoh8f.png"
            className="h-12 w-12 object-cover rounded-full"
          />
          <div className="flex flex-col mx-3">
            <span>Hi The Guy you know, welcome to your Dashboard!</span>
            <span className="text-sm">
              Update your details, get started with your own project or check on
              live campaigns.
            </span>
          </div>
        </div>
        <div className="mr-10 flex flex-row items-center">
          <button className="bg-prigreen text-prilight mx-4 rounded-xl text-xl px-4 h-8">Chat with our staff</button>
          <button className="bg-priorange text-white rounded-xl text-xl px-4 h-8">Preview Profile</button>
        </div>
      </nav>
      <div className="mx-4 mt-10">
        <div className="">
          <div className="bg-green-100 text-pridark h-16 rounded-t-lg  flex items-center">
            <h1 className="px-3 text-xl font-semibold">Current Campaigns</h1>
          </div>
          <div className="border-b border-gray-300 h-14 my-3 grid grid-cols-10 px-7 gap-4 w-full items-center">
            <div className="col-span-6 flex flex-row items-center">
              <div className="flex flex-row bg-gray-200 text-pripurple px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                <BsPencil />
                <h1 className="">Draft</h1>
              </div>
              <h1 className="font-semibold text-pridark">
                Flying condom Glow in the dark
              </h1>
            </div>
            <div className="col-span-2">0 pledged</div>
            <div className="col-span-1">
              <button className="w-full bg-prigreen transition-colors duration-700 text-white h-10 rounded-xl hover:bg-green-800">
                Project Editor
              </button>
            </div>
            <div className="text-prigreen ml-7 flex flex-row items-center gap-2">
              Details
              <BsChevronDown />
            </div>
          </div>
          <div className="border-b border-gray-300 h-14 my-3 grid grid-cols-10 px-7 gap-4 w-full items-center">
            <div className="col-span-6 flex flex-row items-center">
              <div className="flex flex-row bg-red-200 text-red-800 px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                <AiOutlineWarning />
                <h1 className="">Rejected</h1>
              </div>
              <h1 className="font-semibold text-pridark">
                Flying condom Glow in the dark
              </h1>
            </div>
            <div className="col-span-2">0 pledged</div>
            <div className="col-span-1">
              <button className="w-full bg-prigreen transition-colors duration-700 text-white h-10 rounded-xl hover:bg-green-800">
                Project Editor
              </button>
            </div>
            <div className="text-prigreen ml-7 flex flex-row items-center gap-2">
              Details
              <BsChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-20">
        <div className="">
          <div className="h-16 border-b border-gray-300 flex items-center">
            <h1 className="px-3 text-xl font-semibold">Current Campaigns</h1>
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
              <div className="flex flex-row bg-yellow-200 text-yellow-600 px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                <CgSandClock />
                <h1 className="">Live</h1>
              </div>
              <h1 className="font-semibold text-pridark">
                Flying condom Glow in the dark
              </h1>
            </div>
            <div className="col-span-2">0 pledged</div>
            <div className="col-span-1">
              <button className="w-full bg-prigreen transition-colors duration-700 text-white h-10 rounded-xl hover:bg-green-800">
                Project Editor
              </button>
            </div>
            <div className="text-prigreen ml-7 flex flex-row items-center gap-2">
              Details
              <BsChevronDown />
            </div>
          </div>
          <div className="border-b border-gray-300 h-14 my-3 grid grid-cols-10 px-7 gap-4 w-full items-center">
            <div className="col-span-6 flex flex-row items-center">
              <div className="flex flex-row bg-gray-200 text-pripurple px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                <AiOutlineWarning />
                <h1 className="">Draft</h1>
              </div>
              <h1 className="font-semibold text-pridark">
                Flying condom Glow in the dark
              </h1>
            </div>
            <div className="col-span-2">0 pledged</div>
            <div className="col-span-1">
              <button className="w-full bg-prigreen transition-colors duration-700 text-white h-10 rounded-xl hover:bg-green-800">
                Project Editor
              </button>
            </div>
            <div className="text-prigreen ml-7 flex flex-row items-center gap-2">
              Details
              <BsChevronDown />
            </div>
          </div>
        </div>
      </div>

      <Link to="/edit-project/1" className="text-blue-500 underline">
        Go to Editor Project
      </Link>
      <br />
      <Link to="/profile/izeberg" className="text-blue-500 underline">
        Go to Profile
      </Link>
    </div>
  );
}

export default MyProject;

