// import axios from "../../config/axios";
import React, { useEffect, useState } from "react";

function Cardpledge() {
//   const projectId = id;
  const [pledge, setPledge] = useState([]);

//   useEffect(() => {
//     try {
//       const fetchPledge = async () => {
//         const res = await axios.get(`/pledges/get-by-project-id/id`);
//         setPledge(res?.data);
//       };
//       fetchPledge();
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

  const totalPledge = pledge.reduce((acc, i) => {
    return acc + +i?.amount;
  }, 0);

//   const day = new Date();
// //   const lastday = new Date(endDate?.substring(0, 10));
//   const today = new Date(
//     day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
//   );

//   const difference = Math.abs(lastday - today);
//   const difDays = difference / (1000 * 3600 * 24);

  return (
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-96 cursor-pointer m-auto mx-3">
      <div className="w-full block h-full">
        <img
          className="h-72 w-full object-cover"
          alt=""
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          
        />
        <div className="bg-white w-full p-4 flex flex-col pt-8">
            <button className="w=full bg-pridark transition-colors duration-700 text-white h-16 rounded-xl hover:bg-gray-500">Pledge Now</button>
          <h1 className="font-bold">1</h1>
          <div className="w-full h-4 bg-blue-200 rounded-full">
            <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex flex-start justify-between pt-8">
            <p className="text-gray-900 text-2xl">AU$ 12,222</p>
            <p className="text-gray-900 text-2xl">12</p>
          </div>
          <div className="flex flex-start justify-between">
            <p className="text-blue-700 text-md">
              of {Math.floor("12000")} stretch
            </p>
            <p className="text-gray-900 text-md">days left</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpledge;
