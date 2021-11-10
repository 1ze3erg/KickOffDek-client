import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { isInt } from "validator";
import { formatMonthNumberToString, formatMonthStringToNumber } from "../../../helpers/format";

function RewardDetail(props) {
    const { setShowRewardOverview, setShowRewardDetail, setShowRewardAdditional, newReward, setNewReward } = props;
    const { minAmount, limit, maxQtyPerPledge, estDeliveryMonth, estDeliveryYear } = newReward;
    const [err, setErr] = useState({ minAmount: "", limit: "", maxQtyPerPledge: "", estDelivery: "" });
    const [checked, setChecked] = useState({
        limit: false,
        maxQtyPerPledge: false,
    });

    useEffect(() => {
        if (limit) {
            setChecked((currentState) => ({ ...currentState, limit: false }));
        } else if (limit !== "") {
            setChecked((currentState) => ({ ...currentState, limit: true }));
        }
        if (maxQtyPerPledge) {
            setChecked((currentState) => ({ ...currentState, maxQtyPerPledge: false }));
        } else if (maxQtyPerPledge !== "") {
            setChecked((currentState) => ({ ...currentState, maxQtyPerPledge: true }));
        }
    }, [limit, maxQtyPerPledge]);

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setNewReward((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else if (e.target.name === "minAmount" && isNaN(minAmount)) {
            setNewReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, minAmount: "Pledge Amount must be numeric" }));
        } else if (e.target.name === "estDelivery") {
            setNewReward((currentState) => ({
                ...currentState,
                estDeliveryMonth: formatMonthNumberToString(e.target.value.split("-")[1]),
                estDeliveryYear: e.target.value.split("-")[0],
            }));
        } else if (e.target.name === "limit" || e.target.name === "maxQtyPerPledge") {
            if (!isInt(e.target.value, { allow_leading_zeroes: false })) {
                setNewReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "Must be integer" }));
            } else {
                setNewReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
            }
        } else {
            setNewReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    const handleChangeCheckbox = (e) => {
        if (e.target.checked) {
            setNewReward((currentState) => ({ ...currentState, [e.target.name]: null }));
            setChecked((currentState) => ({ ...currentState, [e.target.name]: true }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        } else {
            setChecked((currentState) => ({ ...currentState, [e.target.name]: false }));
        }
    };

    const buttonNextDisabled = !minAmount ||  !estDeliveryMonth || !estDeliveryYear;

    return (
        <div className="w-1/2">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex flex-row items-center">
                    <HiArrowNarrowLeft
                        className="text-xl mr-3 cursor-pointer"
                        onClick={() => {
                            setShowRewardOverview(true);
                            setShowRewardDetail(false);
                        }}
                    />
                    <h1 className="font-semibold text-xl">New Reward</h1>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    <button
                        className={`bg-prigreen hover:bg-green-900 h-8 w-16 text-md text-white rounded-lg ${
                            buttonNextDisabled ? "opacity-50" : "opacity-100"
                        }`}
                        onClick={() => {
                            setShowRewardDetail(false);
                            setShowRewardAdditional(true);
                        }}
                        disabled={buttonNextDisabled}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="h-150 overflow-y-auto mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                <div className="mt-10">
                    <h1>Reward Details</h1>
                </div>
                <div className="mt-7">
                    <label htmlFor="minAmount" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Pledge Amount
                    </label>
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-400">US$</span>
                        </div>
                        <input
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                            type="text"
                            name="minAmount"
                            id="minAmount"
                            placeholder="Pledge Amount"
                            value={minAmount}
                            onChange={handleChangeInput}
                        />
                    </div>
                    {err.minAmount && <p className="text-xs pt-2 text-red-700">{err.minAmount}</p>}
                </div>
                <div className="mt-7">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Est. Delivery
                    </label>
                    <input
                        className="border border-gray-300 text-sm text-gray-600 w-full p-2 my-2 h-10 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        type="month"
                        name="estDelivery"
                        placeholder="Est. Delivery"
                        value={
                            estDeliveryMonth &&
                            estDeliveryYear &&
                            `${estDeliveryYear}-${formatMonthStringToNumber(estDeliveryMonth)}`
                        }
                        onChange={handleChangeInput}
                    />
                    {err.estDelivery && <p className="text-xs pt-2 text-red-700">{err.estDelivery}</p>}
                </div>
                <div className="my-7 flex flex-col">
                    <label htmlFor="limit" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Total Number Available
                    </label>
                    <div className="flex flex-row items-center">
                        <input
                            className="border w-1/3 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                            type="number"
                            id="limit"
                            name="limit"
                            placeholder="Total quantity"
                            value={limit}
                            onChange={handleChangeInput}
                            disabled={checked.limit}
                        />
                        <input
                            type="checkbox"
                            className="form-checkbox ml-5 h-5 w-5 text-green-600"
                            name="limit"
                            checked={checked.limit}
                            onChange={handleChangeCheckbox}
                        />
                        <h1 className="text-sm ml-3">Unlimited</h1>
                    </div>
                    {err.limit && <p className="text-xs pt-2 text-red-700">{err.limit}</p>}
                </div>
                <div className="my-7 flex flex-col">
                    <label htmlFor="maxQtyPerPledge" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Max Qty Per Pledge
                    </label>
                    <div className="flex flex-row items-center">
                        <input
                            className="border w-1/3 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                            type="number"
                            id="maxQtyPerPledge"
                            name="maxQtyPerPledge"
                            placeholder="Max per pledge"
                            value={maxQtyPerPledge}
                            onChange={handleChangeInput}
                            disabled={checked.maxQtyPerPledge}
                        />
                        <input
                            type="checkbox"
                            className="form-checkbox ml-5 h-5 w-5 text-green-600"
                            name="maxQtyPerPledge"
                            checked={checked.maxQtyPerPledge}
                            onChange={handleChangeCheckbox}
                        />
                        <h1 className="text-sm ml-3">Unlimited</h1>
                    </div>
                    {err.maxQtyPerPledge && <p className="text-xs pt-2 text-red-700">{err.maxQtyPerPledge}</p>}
                </div>
            </div>
        </div>
    );
}

export default RewardDetail;
