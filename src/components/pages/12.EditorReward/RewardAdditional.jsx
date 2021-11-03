import { MdOutlineLocalShipping } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState } from "react";
import ModalShippingOption from "./ModalShippingOption";

function RewardAdditional({ setShowRewardHome, setShowRewardOverview, setShowRewardDetail, setShowRewardAdditional }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="w-1/2 self-start">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex flex-row items-center">
                    <HiArrowNarrowLeft
                        className="text-xl mr-3 cursor-pointer"
                        onClick={() => {
                            setShowRewardDetail(true);
                            setShowRewardAdditional(false);
                        }}
                    />
                    <h1 className="font-semibold text-xl">New Reward</h1>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    <button
                        className="bg-priorange hover:bg-pripurple px-5 py-2 text-md text-white rounded-lg"
                        onClick={() => {
                            setShowRewardHome(true);
                            setShowRewardOverview(true);
                            setShowRewardAdditional(false);
                        }}
                    >
                        Create Reward
                    </button>
                </div>
            </div>
            <div className="mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                <div className="mt-10">
                    <h1>Reward overview</h1>
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
    );
}

export default RewardAdditional;
