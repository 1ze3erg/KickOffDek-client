import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsPlusLg, BsPerson, BsCalendarCheck, BsFillTrashFill } from "react-icons/bs";
import { BiInfinite } from "react-icons/bi";
import axios from "../../../config/axios";

function EditorReward() {
    const { projectId } = useParams();
    const [rewards, setRewards] = useState([]);
    const [ShowMore, setShowMore] = useState("truncate");
    const [HideShowButton, setHideShowButton] = useState("Show more");
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

    const showMore = () => {
        if (ShowMore === "truncate") {
            setShowMore("");
            setHideShowButton("Show less");
        } else {
            setShowMore("truncate");
            setHideShowButton("Show more");
        }
    };

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
                    <div
                        className="overflow-hidden shadow-lg transform rounded-lg w-68 m-auto mb-5 text-pridark"
                        key={elem?.id}
                    >
                        <div className="w-full block h-full">
                            <img className="h-48 w-full object-cover" alt="rewardImage" src={elem?.image} />
                            <BsFillTrashFill
                                className="absolute bottom-4 right-3 text-xl text-pridark cursor-pointer"
                                onClick={() => clickDelReward(elem?.id)}
                            />
                            <Link to={`/edit-project/${projectId}/reward-edit/${elem?.id}`}>
                                <button className="absolute top-3 right-3 text-white  w-20 rounded-lg h-10 bg-prigreen transition-colors duration-700 hover:bg-gray-700">
                                    Edit
                                </button>
                            </Link>
                            <div className="bg-white w-full p-4 flex flex-col pt-4">
                                <div className="flex items-center justify-center">
                                    <h1 className="text-sm">{elem?.title}</h1>
                                </div>
                                <div>
                                    <h1 className={`text-md text-purple-800 mt-4 ${ShowMore}`}>{elem?.description}</h1>
                                    <button onClick={showMore} className="text-sm text-green-800 font-semibold">
                                        {HideShowButton}
                                    </button>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button className="rounded-lg bg-prigreen transition-colors duration-700   hover:bg-gray-700 text-white w-full h-10">
                                        ${elem?.minAmount} OR MORE
                                    </button>
                                </div>
                                <div className="flex flex-start text-xs mt-3 items-center">
                                    <BsPerson />
                                    <h1 className="ml-1">
                                        0 chosen / {elem?.limit || <BiInfinite className="inline" />} available
                                    </h1>
                                </div>
                                <div className="flex flex-start text-xs mt-3">
                                    <BsCalendarCheck />
                                    <h1 className="ml-1">
                                        {" "}
                                        Est. delivery is {elem?.estDeliveryMonth} {elem?.estDeliveryYear}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EditorReward;
