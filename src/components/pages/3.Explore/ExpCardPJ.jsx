import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";
import { calDiffDay } from "../../../helpers/calculate";
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

    return (
        <div className="text-gray-600 overflow-hidden shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg w-72 cursor-pointer m-auto mx-3">
            <div className="w-full block h-full">
                <img className="h-48 w-full object-cover" alt="" src={campaignImage} />
                <div className="absolute top-20 h-28 w-full bg-gradient-to-t from-gray-800 flex items-center justify-center">
                    <h1 className="text-2xl text-white line-clamp-2 mx-5">{title}</h1>
                </div>
                <div className="bg-white w-full p-4 flex flex-col pt-8">
                    <div className="w-full h-4 bg-prilight rounded-full">
                        <div
                            className="h-full text-center text-xs text-white bg-priorange rounded-full"
                            style={{ width: `${(totalPledge / target) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex flex-start justify-between pt-8">
                        <p className="text-gray-900 text-2xl">
                            {Currency ? formatMoney(totalPledge, Currency?.name) : Math.floor(totalPledge)}
                        </p>
                        <p className="text-gray-900 text-2xl">{calDiffDay(endDate)}</p>
                    </div>
                    <div className="flex flex-start justify-between">
                        <p className="text-md">of {formatMoney(target, Currency?.name)} target</p>
                        <p className="text-md">days left</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpCardPJ;
