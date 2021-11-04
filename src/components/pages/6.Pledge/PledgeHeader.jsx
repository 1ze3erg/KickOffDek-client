import React from "react";
import { BsXLg } from "react-icons/bs";

function PledgeHeader({ title }) {
  return (
    <div className="flex justify-between items-center bg-green-800 w-full h-16 py-9 text-white px-7">
      <div className="flex flex-row">
        <h1 className="text-xl mr-3">Pledge</h1>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <BsXLg className="text-xl" />
    </div>
  );
}

export default PledgeHeader;
