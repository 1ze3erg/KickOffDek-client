import { useEffect, useState } from "react";
import { MdKeyboardBackspace, MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../../config/axios";

function CreateProjectType({ setShowProjectType, setShowCampaignDetail }) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios
            .get("/types/get-all")
            .then((res) => {
                setTypes(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-2">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <MdKeyboardBackspace className="text-2xl mr-2 cursor-pointer" />
                    </Link>
                    <h1 className="text-xl font-bold mr-8">Choose Type</h1>
                </div>
                <button
                    className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white"
                    onClick={() => {
                        setShowProjectType(false);
                        setShowCampaignDetail(true);
                    }}
                >
                    Next
                </button>
            </div>
            <div className="w-full mx-auto flex flex-col p-3">
                {types.map((elem) => (
                    <div
                        key={elem.id}
                        className={`border border-gray-500 p-5 mb-2 rounded-lg cursor-pointer hover:bg-gray-300`}
                    >
                        <h1 className="font-bold">{elem.name}</h1>
                        <div className="flex justify-start items-center">
                            <MdCheck className="mr-2" />
                            <p>set your funding target</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <MdCheck className="mr-2" />
                            <p>offer reward and incentives</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <MdCheck className="mr-2" />
                            <p>presale, events and launches</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateProjectType;
