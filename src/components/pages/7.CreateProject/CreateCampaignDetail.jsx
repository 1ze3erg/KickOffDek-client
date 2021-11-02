import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import axios from "../../../config/axios";

function CreateProjectDetail({ setShowProjectType, setShowCampaignDetail, setShowProjectVisual }) {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios
            .get("/currencies/get-all")
            .then((res) => {
                setCurrencies(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <MdKeyboardBackspace
                        className="text-2xl mr-2 cursor-pointer"
                        onClick={() => {
                            setShowCampaignDetail(false);
                            setShowProjectType(true);
                        }}
                    />
                    <h1 className="text-xl font-bold">Campaign Details</h1>
                </div>
                <button
                    className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white"
                    onClick={() => {
                        setShowCampaignDetail(false);
                        setShowProjectVisual(true);
                    }}
                >
                    Next
                </button>
            </div>
            <div className="w-full mx-auto flex flex-col p-2">
                <h1 className="mt-5 mb-7 font-bold text-lg">Overview</h1>
                <div className="mb-5">
                    <label htmlFor="title" className="text-sm">
                        Campaign Title
                    </label>
                    <input
                        class="mt-1 h-10 block w-full py-5 px-3 text-gray-600 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Campaign Title"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="currency" className="text-sm">
                        Currency
                    </label>
                    <select
                        class="mt-1 h-10 block w-full py-5 px-3 text-gray-600 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="currency"
                        name="currency"
                        value="1"
                    >
                        {currencies.map((elem) => (
                            <option key={elem.id} value={elem.id}>
                                {elem.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="target" className="text-sm">
                        Currency
                    </label>
                    <div className="mt-1 relative rounded shadow-sm border border-gray-300">
                        <div className="absolute inset-y-0 left-0 pl-3 h-10 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">USD</span>
                        </div>
                        <input
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-14 pr-12 sm:text-sm border-gray-300 rounded-md"
                            type="text"
                            id="target"
                            name="target"
                            placeholder="0.00"
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="endDate" className="text-sm">
                        End Date
                    </label>
                    <input
                        className="border border-gray-300 text-sm text-gray-600 w-full py-5 px-3 my-2 h-10 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        id="endDate"
                        name="endDate"
                        type="datetime-local"
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateProjectDetail;
