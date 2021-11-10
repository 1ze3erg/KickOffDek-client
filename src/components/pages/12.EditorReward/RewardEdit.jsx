import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PreviewReward from "./PreviewReward";
import RewardEditForm from "./RewardEditForm";
import axios from "../../../config/axios";

function RewardEdit() {
    const { rewardId, projectId } = useParams();
    const [reward, setReward] = useState({});
    const [project, setProject] = useState({});

    useEffect(() => {
        axios
            .get(`/rewards/get-by-id/${rewardId}`)
            .then((res) => {
                setReward(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
        axios
            .get(`/projects/get-by-id/${projectId}`)
            .then((res) => {
                setProject(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [rewardId, projectId]);

    return (
        <div className="">
            <div className="flex flex-row items-center py-5">
                <RewardEditForm reward={reward} setReward={setReward} />
                <div className="w-1/2 h-150 overflow-y-auto flex justify-center mx-5 border border-gray-300 rounded-xl">
                    <PreviewReward reward={reward} project={project} />
                </div>
            </div>
        </div>
    );
}

export default RewardEdit;
