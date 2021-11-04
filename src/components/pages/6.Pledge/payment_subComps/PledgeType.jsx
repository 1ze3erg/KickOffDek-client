import React from "react";

function PledgeType({ target, endDate }) {
  const date = endDate.substring(0, 10);
  const time = endDate.substring(11, 16);
  console.log(endDate);
  return (
    <div className="w-72 border border-gray-300 rounded-xl my-3">
      <div className="flex  rounded-md bg-gray-200 justify-center my-2 mx-3 text-sm">
        Pledge Summary
      </div>
      <div className="flex flex-row justify-between px-4 my-1">
        <p className="text-gray-600">
          Pledges are only processed if the target AU${target} is reached before{" "}
          <span className="text-lg font-semibold">
            {time}AM on {date}.
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-green-800 text-sm">Learn More</button>
      </div>
    </div>
  );
}

export default PledgeType;
