import { HiArrowNarrowLeft } from "react-icons/hi";

function RewardDetail({ setShowRewardOverview, setShowRewardDetail, setShowRewardAdditional }) {
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
                        className="bg-prigreen hover:bg-pridark h-8 w-16 text-md text-white rounded-lg"
                        onClick={() => {
                            setShowRewardDetail(false);
                            setShowRewardAdditional(true);
                        }}
                    >
                        Next
                    </button>
                </div>
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
                            name="minPledge"
                            id="minPledge"
                            placeholder="Pledge Amount"
                        />
                    </div>
                </div>
                <div className="mt-7">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Est. Delivery
                    </label>
                    <input
                        className="border border-gray-300 text-sm text-gray-600 w-full p-2 my-2 h-10 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        type="month"
                        name="estDelivery"
                        placeholder="date...."
                    />
                </div>
                <div className="my-7 flex flex-col">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Total Number Available
                    </label>
                    <div className="flex flex-row items-center">
                        <input
                            type="number"
                            id="limit"
                            name="limit"
                            required
                            className="border w-1/3 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                            placeholder="Total quantity"
                        />
                        <input type="checkbox" className="form-checkbox ml-5 h-5 w-5 text-green-600" />
                        <h1 className="text-sm ml-3">Unlimited</h1>
                    </div>
                </div>
                <div className="my-7 flex flex-col">
                    <label htmlFor="maxPerPledge" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Max Qty Per Pledge
                    </label>
                    <div className="flex flex-row items-center">
                        <input
                            type="number"
                            id="maxPerPledge"
                            name="maxPerPledge"
                            required
                            className="border w-1/3 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                            placeholder="Max per pledge"
                        />
                        <input type="checkbox" className="form-checkbox ml-5 h-5 w-5 text-green-600" />
                        <h1 className="text-sm ml-3">Unlimited</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RewardDetail;
