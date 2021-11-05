import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProjectActivity from "./ProjectActivity";
import ProjectCampaign from "./ProjectCampaign";
import ProjectCommunity from "./ProjectCommunity";
import ProjectInfo from "./ProjectInfo";
import ProjectNav from "./ProjectNav";
import ProjectRewardCard from "./ProjectRewardCard";
import axios from "../../../config/axios";

function Project() {
    const { projectId } = useParams();
    const [reward, setReward] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        try {
            const fetchReward = async () => {
                const res = await axios.get(`/rewards/get-by-project-id/${projectId}`);
                setReward(res.data);
            };
            fetchReward();
        } catch (error) {
            console.log(error);
        }
    }, [projectId]);

    return (
        <div>
            <ProjectInfo />
            <ProjectNav setPage={setPage} />
            <div className="grid grid-cols-4 w-10/12 mx-auto">
                <div className="col-span-3 mr-4">
                    {page === 1 ? <ProjectCampaign /> : page === 2 ? <ProjectActivity /> : <ProjectCommunity />}
                </div>
                <div className="col-span-1 mx-auto">
                    <h1 className="text-2xl font-bold my-2">Pledge</h1>
                    {reward.map((item) => {
                        return <ProjectRewardCard key={item.id} {...item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Project;
