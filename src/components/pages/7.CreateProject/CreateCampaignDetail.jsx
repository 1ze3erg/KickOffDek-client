import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import axios from "../../../config/axios";

function CreateCampaignDetail({ setShowProjectType, setShowCampaignDetail, setShowProjectVisual, input, setInput }) {
    const { title, currencyId, target, endDate } = input;
    const [currencies, setCurrencies] = useState([]);
    const [err, setErr] = useState({ title: "", currencyId: "", target: "", endDate: "" });

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
        if (e.target.value.trim() === "") {
            setInput((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else if (e.target.name === "target" && isNaN(+e.target.value)) {
            setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "target must be numeric" }));
        } else if (e.target.name === "currencyId") {
            setInput((currentState) => ({
                ...currentState,
                currency: currencies.find((elem) => elem.id === +e.target.value)?.name,
                [e.target.name]: e.target.value,
            }));
        } else {
            setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    const buttonNextDisabled = !title || !currencyId || !target || !endDate;

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
                    className={`py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white ${
                        buttonNextDisabled ? "opacity-50" : "opacity-100"
                    }`}
                    onClick={() => {
                        setShowCampaignDetail(false);
                        setShowProjectVisual(true);
                    }}
                    disabled={buttonNextDisabled}
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
                        className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Campaign Title"
                        value={title}
                        onChange={handleChangeInput}
                    />
                    {err.title && <p className="text-xs pt-2 text-red-700">{err.title}</p>}
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
                    {err.currencyId && <p className="text-xs pt-2 text-red-700">{err.currencyId}</p>}
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
                            placeholder="0.00"
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
                        value={endDate}
                        onChange={handleChangeInput}
                    />
                    {err.endDate && <p className="text-xs pt-2 text-red-700">{err.endDate}</p>}
                </div>
            </div>
        </div>
    );
}

export default CreateCampaignDetail;
