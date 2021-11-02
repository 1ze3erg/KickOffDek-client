// import axios from "../../config/axios";
import React, { useEffect, useState } from "react";

function Cardpledgenobutton() {
  const [pledge, setPledge] = useState([]);

  const totalPledge = pledge.reduce((acc, i) => {
    return acc + +i?.amount;
  }, 0);


  return (
    <div className="overflow-hidden shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg w-72 cursor-pointer m-auto mx-3">
      <div className="w-full block h-full">
        <img
          className="h-48 w-full object-cover"
          alt=""
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        />
        <div className="absolute top-20 h-28 w-full bg-gradient-to-t from-gray-800 flex items-center justify-center">
            <h1 className="text-2xl text-white line-clamp-2 mx-5">Deeznuts Deeznuts</h1>
        </div>
        <div className="bg-white w-full p-4 flex flex-col pt-8">
          <div className="w-full h-4 bg-prilight rounded-full">
            <div className="w-2/3 h-full text-center text-xs text-white bg-priorange rounded-full"></div>
          </div>
          <div className="flex flex-start justify-between pt-8">
            <p className="text-gray-900 text-2xl">AU$ 12,222</p>
            <p className="text-gray-900 text-2xl">12</p>
          </div>
          <div className="flex flex-start justify-between">
            <p className="text-gray-600 text-md">
              of {Math.floor("12000")} stretch
            </p>
            <p className="text-gray-600 text-md">days left</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cardpledgenobutton;
