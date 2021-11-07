import { useEffect, useState } from "react";
import MyPledgeItem from "./MyPledgeItem";
import axios from "../../../config/axios";

function MyPledge() {
    const [pledges, setPledges] = useState([]);

    useEffect(() => {
        axios
            .get("/pledges/get-by-user-id")
            .then((res) => {
                setPledges(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div>
            <div className="w-3/4 ml-10 mt-12">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl font-medium">My Pledges</h1>
                </div>
            </div>
            <div className="mx-4 mt-10">
                <div className="">
                    <div className="bg-green-100 text-pridark py-5 px-3 rounded-t-lg  flex items-center">
                        <h1 className="px-3 text-lg font-semibold">Funding Projects</h1>
                    </div>
                    {pledges.map((elem, idx) => {
                    return elem?.Reward.Project.status === "live" ? (
                        <MyPledgeItem key={idx} pledgeInfo={elem} />
                    ) : null;
                })}
                </div>
            </div>
            <div className="mx-4 mt-20">
                <div className="py-5 px-3 border-b border-gray-300 flex items-center">
                    <h1 className="px-3 text-lg font-semibold">Successful Projects</h1>
                </div>
                {pledges.map((elem, idx) => {
                    return elem?.Reward.Project.status === "successful" ? (
                        <MyPledgeItem key={idx} pledgeInfo={elem} />
                    ) : null;
                })}
            </div>
        </div>
    );
}

export default MyPledge;
