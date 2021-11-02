import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";
import { formatMoney } from "../../../helpers/format";

function ExpCardPJ({ id, target, campaignImage, title, endDate, Currency }) {
  const projectId = id;
  const [pledge, setPledge] = useState([]);

  useEffect(() => {
    try {
      const fetchPledge = async () => {
        const res = await axios.get(`/pledges/get-by-project-id/${projectId}`);
        setPledge(res?.data);
      };
      fetchPledge();
    } catch (error) {
      console.log(error);
    }
  }, [projectId]);

  const totalPledge = pledge.reduce((acc, i) => {
    return acc + +i?.amount;
  }, 0);

  const day = new Date();
  const lastday = new Date(endDate?.substring(0, 10));
  const today = new Date(
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
  );

  const difference = Math.abs(new Date(lastday - today));
  const difDays = difference / (1000 * 3600 * 24);

  return (
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-64 cursor-pointer m-auto mx-3">
      <div className="w-full block h-full">
        <img
          className="h-56 w-full object-cover"
          alt=""
          //   src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          src={campaignImage}
        />
        <div className="bg-white w-full p-4 flex flex-col pt-8">
          <h1 className="font-bold">{title}</h1>
          <div className="w-full h-4 bg-blue-200 rounded-full">
            <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex flex-start justify-between pt-8">
            <p className="text-gray-900 text-2xl">
              {Currency
                ? formatMoney(totalPledge, Currency.name)
                : Math.floor(totalPledge)}
            </p>
            <p className="text-gray-900 text-2xl">{Math.floor(difDays)}</p>
          </div>
          <div className="flex flex-start justify-between">
            <p className="text-blue-700 text-md">of {target} stretch</p>
            <p className="text-gray-900 text-md">days left</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCardPJ;
