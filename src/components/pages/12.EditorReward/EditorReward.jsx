import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import axios from "../../../config/axios";
import RewardCard from "./RewardCard";

function EditorReward() {
    const { projectId } = useParams();
    const [rewards, setRewards] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios
            .get(`/rewards/get-by-project-id/${projectId}`)
            .then((res) => {
                setRewards(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [projectId]);

    useEffect(() => {
        setRewards((currentState) => [...currentState, location.state?.newReward]);
    }, [location]);

    const clickDelReward = async (id) => {
        try {
            setRewards((currentState) => currentState.filter((elem) => elem?.id !== id));
            await axios.delete(`/rewards/delete/${id}`);
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="flex justify-between py-5 mx-5">
                <div className="flex flex-row items-center">
                    <Link to={{ pathname: `/edit-project/${projectId}` }}>
                        <HiArrowNarrowLeft className="text-xl mr-3" />
                    </Link>
                    <h1 className="font-semibold text-xl">Rewards</h1>
                </div>
                <Link to={`/edit-project/${projectId}/reward-add`}>
                    <button className="flex flex-row bg-priorange text-white rounded-lg hover:bg-pripurple h-10 items-center text-md w-32 justify-center">
                        <BsPlusLg className="text-sm" />
                        <span className="mx-1">Add new</span>
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-4 w-full pb-10">
                {rewards.map((elem) => (
                    <RewardCard elem={elem} clickDelReward={clickDelReward} />
                ))}
            </div>
        </div>
    );
}

export default EditorReward;
