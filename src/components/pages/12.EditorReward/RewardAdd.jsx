import { useState } from "react";
import PreviewReward from "./PreviewReward";
import RewardAdditional from "./RewardAdditional";
import RewardDetail from "./RewardDetail";
import RewardOverview from "./RewardOverview";

function RewardAdd({ setShowRewardHome, setShowRewardAdd }) {
    const [newReward, setNewReward] = useState({});
    const [showRewardOverview, setShowRewardOverview] = useState(true);
    const [showRewardDetail, setShowRewardDetail] = useState(false);
    const [showRewardAdditional, setShowRewardAdditional] = useState(false);

    const progressBar = showRewardOverview ? "w-1/3" : showRewardDetail ? "w-2/3" : "w-3/3"

    return (
        <div className="">
            <div className="w-full h-1 bg-prilight rounded-full">
                <div className={`${progressBar} h-full text-center text-xs text-white bg-pripurple rounded-full`}></div>
            </div>
            <div className="flex flex-row items-center py-5">
                {showRewardOverview && (
                    <RewardOverview
                        setShowRewardHome={setShowRewardHome}
                        setShowRewardAdd={setShowRewardAdd}
                        setShowRewardOverview={setShowRewardOverview}
                        setShowRewardDetail={setShowRewardDetail}
                    />
                )}
                {showRewardDetail && (
                    <RewardDetail
                        setShowRewardOverview={setShowRewardOverview}
                        setShowRewardDetail={setShowRewardDetail}
                        setShowRewardAdditional={setShowRewardAdditional}
                    />
                )}
                {showRewardAdditional && (
                    <RewardAdditional
                        setShowRewardHome={setShowRewardHome}
                        setShowRewardOverview={setShowRewardOverview}
                        setShowRewardDetail={setShowRewardDetail}
                        setShowRewardAdditional={setShowRewardAdditional}
                    />
                )}
                <div className="w-1/2 h-150 overflow-y-scroll flex justify-center mx-5 border border-gray-300 rounded-xl">
                    <PreviewReward />
                </div>
            </div>
        </div>
    );
}

export default RewardAdd;
