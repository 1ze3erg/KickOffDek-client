import { useState } from "react";
import PreviewReward from "./PreviewReward";
import RewardAdditional from "./RewardAdditional";
import RewardDetail from "./RewardDetail";
import RewardOverview from "./RewardOverview";
import axios from "../../../config/axios";
import { useHistory, useParams } from "react-router";

function RewardAdd() {
    const { projectId } = useParams();
    const [newReward, setNewReward] = useState({
        title: "",
        description: "",
        image: "",
        minAmount: "",
        limit: null,
        maxQtyPerPledge: null,
        estDeliveryMonth: "",
        estDeliveryYear: "",
    });
    const [showRewardOverview, setShowRewardOverview] = useState(true);
    const [showRewardDetail, setShowRewardDetail] = useState(false);
    const [showRewardAdditional, setShowRewardAdditional] = useState(false);
    const history = useHistory();

    const clickCreateReward = async () => {
        try {
            const res = await axios.post("/rewards/create", { ...newReward, projectId });
            history.push(`/edit-project/${projectId}/reward`, { newReward: res.data });
        } catch (err) {
            console.dir(err);
        }
    };

    const progressBar = showRewardOverview ? "w-1/3" : showRewardDetail ? "w-2/3" : "w-3/3";

    return (
        <div className="">
            <div className="w-full h-1 bg-prilight rounded-full">
                <div className={`${progressBar} h-full text-center text-xs text-white bg-pripurple rounded-full`}></div>
            </div>
            <div className="flex flex-row items-center py-5">
                {showRewardOverview && (
                    <RewardOverview
                        setShowRewardOverview={setShowRewardOverview}
                        setShowRewardDetail={setShowRewardDetail}
                        newReward={newReward}
                        setNewReward={setNewReward}
                    />
                )}
                {showRewardDetail && (
                    <RewardDetail
                        setShowRewardOverview={setShowRewardOverview}
                        setShowRewardDetail={setShowRewardDetail}
                        setShowRewardAdditional={setShowRewardAdditional}
                        newReward={newReward}
                        setNewReward={setNewReward}
                    />
                )}
                {showRewardAdditional && (
                    <RewardAdditional
                        setShowRewardOverview={setShowRewardOverview}
                        setShowRewardDetail={setShowRewardDetail}
                        setShowRewardAdditional={setShowRewardAdditional}
                        clickCreateReward={clickCreateReward}
                    />
                )}
                <div className="w-1/2 h-150 overflow-y-auto flex justify-center mx-5 border border-gray-300 rounded-xl">
                    <PreviewReward reward={newReward} setNewReward={setNewReward} />
                </div>
            </div>
        </div>
    );
}

export default RewardAdd;
