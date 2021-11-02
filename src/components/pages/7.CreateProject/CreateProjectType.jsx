import { useEffect, useState } from "react";
import { MdKeyboardBackspace, MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../../config/axios";

function CreateProjectType({ setShowProjectType, setShowCampaignDetail, input: { typeId }, setInput }) {
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

    const clickChangeType = (typeId) => {
        setInput((currentState) => ({ ...currentState, typeId }));
    };

    const buttonNextDisabled = typeId ? false : true;

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
                    className={`py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white ${
                        buttonNextDisabled ? "opacity-50" : "opacity-100"
                    }`}
                    onClick={() => {
                        setShowProjectType(false);
                        setShowCampaignDetail(true);
                    }}
                    disabled={buttonNextDisabled}
                >
                    Next
                </button>
            </div>
            <div className="w-full mx-auto flex flex-col p-3 h-150">
                {types.map((elem) => (
                    <div
                        key={elem.id}
                        className={`${
                            typeId === elem.id ? "bg-white border-2 border-black" : "border border-gray-500"
                        } p-5 mb-5 rounded-lg cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:border-gray-800`}
                        onClick={() => clickChangeType(elem.id)}
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
