import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { formatMonthNumberToString, formatMonthStringToNumber } from "../../../helpers/format";
import { isInt } from "validator";
import ModalShippingOption from "./ModalShippingOption";
import axios from "../../../config/axios";

function RewardEditForm({ reward, setReward }) {
    const { projectId, rewardId } = useParams();
    const { title, description, image, minAmount, limit, maxQtyPerPledge, estDeliveryMonth, estDeliveryYear } = reward;
    const [err, setErr] = useState({ minAmount: "", limit: "", maxQtyPerPledge: "" });
    const [rewardImageStatus, setRewardImageStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
        if (e.target.name === "minAmount" && isNaN(minAmount)) {
            setReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, minAmount: "Pledge Amount must be numeric" }));
        } else if (e.target.name === "estDelivery") {
            setReward((currentState) => ({
                ...currentState,
                estDeliveryMonth: formatMonthNumberToString(e.target.value.split("-")[1]),
                estDeliveryYear: e.target.value.split("-")[0],
            }));
        } else if (e.target.name === "limit" || e.target.name === "maxQtyPerPledge") {
            if (!isInt(e.target.value, { allow_leading_zeroes: false })) {
                setReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "Must be integer" }));
            } else {
                setReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
                setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
            }
        } else {
            setReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    const handleChangeCheckbox = (e) => {
        if (e.target.checked) {
            setReward((currentState) => ({ ...currentState, [e.target.name]: null }));
            setChecked((currentState) => ({ ...currentState, [e.target.name]: true }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        } else {
            setChecked((currentState) => ({ ...currentState, [e.target.name]: false }));
        }
    };

    const handleChangeFile = async (e) => {
        try {
            setRewardImageStatus(true);
            const formData = new FormData();
            formData.append("upload-image", e.target.files[0]);
            const res = await axios.post("/uploads/image", formData);
            alert("upload image success");
            setRewardImageStatus(false);
            setReward((currentState) => ({ ...currentState, image: res.data?.imageUrl }));
        } catch (err) {
            console.dir(err);
        }
    };

    const clickSave = async () => {
        try {
            if (!err.minAmount && !err.limit && !err.maxQtyPerPledge) {
                const res = await axios.put(`/rewards/update/${rewardId}`, reward);
                alert(res.data?.msg);
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                alert(err.response?.data?.msg);
            }
            console.dir(err);
        }
    };

    return (
        <div className="w-1/2">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex flex-row items-center">
                    <Link to={`/edit-project/${projectId}/reward`}>
                        <HiArrowNarrowLeft className="text-xl mr-3 cursor-pointer" />
                    </Link>
                    <h1 className="font-semibold text-xl">Edit Reward</h1>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    <button
                        className="bg-prigreen hover:bg-pridark h-8 w-16 text-md text-white rounded-lg"
                        onClick={clickSave}
                    >
                        Save
                    </button>
                </div>
            </div>

            <div className="h-150 overflow-y-scroll mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                <div className="mt-10">
                    <h1>Reward overview</h1>
                </div>
                <div className="mt-7">
                    <label htmlFor="title " className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Title
                    </label>
                    <input
                        className="border w-full border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400 bg-white"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        value={title}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="mt-7">
                    <label htmlFor="description" className="pb-2 text-sm text-pridark dark:text-gray-100">
                        Description
                    </label>
                    <textarea
                        class="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-full h-24"
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChangeInput}
                    ></textarea>
                </div>
                <div className="my-7">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Reward Image
                    </label>
                    <div className="relative">
                        {rewardImageStatus && (
                            <div className="absolute rounded-t-md backdrop-filter backdrop-blur-sm inset-0 z-0"></div>
                        )}
                        <img
                            className="rounded-t-md shadow-md w-144 h-96"
                            src={image || "https://picsum.photos/1920/1080"}
                            alt="rewardImage"
                        />
                    </div>
                    <label class="w-full flex flex-col items-center justify-center px-4 py-6 bg-white rounded-b-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                        {!rewardImageStatus ? (
                            <>
                                <BsCloudArrowUpFill className="text-3xl" />
                                <span class="mt-2 text-base leading-normal">Select a file</span>
                            </>
                        ) : (
                            <div class="w-10 h-10 border-4 border-pripurple rounded-full loader z-10"></div>
                        )}
                        <input className="hidden" type="file" name="image" onChange={handleChangeFile} />
                    </label>
                </div>

                <div className=" mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                    <div className="mt-10">
                        <h1>Reward Details</h1>
                    </div>
                    <div className="mt-7">
                        <label htmlFor="minPledge" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
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
                            value={`${estDeliveryYear}-${formatMonthStringToNumber(estDeliveryMonth)}`}
                            onChange={handleChangeInput}
                        />
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

                <div className="mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                    <div className="mt-10">
                        <h1>Reward Additional</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center border border-gray-900 rounded-lg w-full my-10 mx-10 py-5">
                            <MdOutlineLocalShipping className="text-2xl sm:text-5xl mb-3" />
                            <h1 className="mb-3 text-md sm:text-2xl">Shipping Options</h1>
                            <h3 className="mb-3 text-sm sm:text-md">This reward includes free shipping.</h3>
                            <button
                                className="inline-flex bg-prigreen text-white rounded-lg px-5 py-2 justify-center items-center hover:bg-pridark"
                                onClick={() => setShowModal(true)}
                            >
                                Addtional Shipping
                            </button>
                            {showModal && <ModalShippingOption setShowModal={setShowModal} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RewardEditForm;
