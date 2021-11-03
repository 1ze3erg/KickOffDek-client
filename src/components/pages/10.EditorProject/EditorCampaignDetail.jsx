import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "../../../config/axios";

function EditorCampaignDetail({ setShowSidebar, setShowCampaignDetail, project, setProject }) {
    const { title, currencyId, target, endDate } = project;
    const [currencies, setCurrencies] = useState([]);
    const [err, setErr] = useState({ target: "" });

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

    const handleChangeInput = (e) => {
        if (e.target.name === "target") {
            if (e.target.value.slice(0, 1) === "0") {
                setProject((currentState) => ({ ...currentState, [e.target.name]: e.target.value.slice(1) }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
            } else if (isNaN(+e.target.value)) {
                setProject((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "target must be numeric" }));
            } else {
                setProject((currentState) => ({ ...currentState, [e.target.name]: e.target.value || 0 }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
            }
        } else if (e.target.name === "currencyId") {
            setProject((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        } else {
            setProject((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        }
    };

    const clickSave = async () => {
        try {
            if (!err.target) {
                const res = await axios.put(`/projects/update/${project.id}`, { title, currencyId, target, endDate });
                alert(res.data?.msg);
            }
        } catch (err) {
            if (err.response && err.response?.status === 400) {
                alert(err.response?.data?.msg);
            }
            console.dir(err);
        }
    };

    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <HiArrowNarrowLeft
                        className="text-2xl mr-2 cursor-pointer"
                        onClick={() => {
                            setShowSidebar(true);
                            setShowCampaignDetail(false);
                        }}
                    />
                    <h1 className="text-xl font-bold">Campaign Details</h1>
                </div>
                <button
                    className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white"
                    onClick={clickSave}
                >
                    Save
                </button>
            </div>
            <div className="w-full mx-auto flex flex-col p-2 h-150">
                <h1 className="mt-5 mb-7 font-bold text-lg">Overview</h1>
                <div className="mb-5">
                    <label htmlFor="title" className="text-sm">
                        Campaign Title
                    </label>
                    <input
                        className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Campaign Title"
                        value={title}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="currencyId" className="text-sm">
                        Currency
                    </label>
                    <select
                        className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="currencyId"
                        name="currencyId"
                        value={currencyId}
                        onChange={handleChangeInput}
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
                        Target
                    </label>
                    <div className="mt-1 relative rounded shadow-sm border border-gray-300">
                        <div className="absolute inset-y-0 left-0 pl-3 py-4 px-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">
                                {currencies.find((elem) => elem.id === +currencyId)?.name}
                            </span>
                        </div>
                        <input
                            className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-14 pr-12 py-4 px-3 sm:text-sm border-gray-300 rounded-md"
                            type="text"
                            id="target"
                            name="target"
                            placeholder="0"
                            value={target}
                            onChange={handleChangeInput}
                        />
                    </div>
                    {err.target && <p className="text-xs pt-2 text-red-700">{err.target}</p>}
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
                        value={endDate.slice(0, 16)}
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditorCampaignDetail;
