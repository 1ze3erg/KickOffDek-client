import { useState } from "react";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";

function RewardOverview({ setShowRewardHome, setShowRewardAdd, setShowRewardOverview, setShowRewardDetail }) {
    const [rewardImageStatus, setRewardImageStatus] = useState(false);
    return (
        <div className="w-1/2">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex flex-row items-center">
                    <HiArrowNarrowLeft
                        className="text-xl mr-3 cursor-pointer"
                        onClick={() => {
                            setShowRewardHome(true);
                            setShowRewardAdd(false);
                        }}
                    />
                    <h1 className="font-semibold text-xl">New Reward</h1>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    <button
                        className="bg-prigreen hover:bg-pridark h-8 w-16 text-md text-white rounded-lg"
                        onClick={() => {
                            setShowRewardOverview(false);
                            setShowRewardDetail(true);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="h-150 overflow-y-scroll mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                <div className="mt-10">
                    <h1>Reward overview</h1>
                </div>
                <div className="mt-7">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Title
                    </label>
                    <input
                        className="border w-full border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400 bg-white"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="mt-7">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Description
                    </label>
                    <textarea
                        class="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-full h-24"
                        name="description"
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
                            src={"https://picsum.photos/1920/1080"}
                            alt="coverImage"
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
                        <input className="hidden" type="file" name="rewardImage" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default RewardOverview;
