import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsPerson, BsCalendarCheck, BsFillTrashFill } from "react-icons/bs";
import { BiInfinite } from "react-icons/bi";
import { formatMoney } from "../../../helpers/format";

function RewardCard({ elem, project, clickDelReward }) {
    const { projectId } = useParams();
    const [ShowMore, setShowMore] = useState("truncate");
    const [HideShowButton, setHideShowButton] = useState("Show more");

    const showMore = () => {
        if (ShowMore === "truncate") {
            setShowMore("");
            setHideShowButton("Show less");
        } else {
            setShowMore("truncate");
            setHideShowButton("Show more");
        }
    };

    return (
        <div className="overflow-hidden shadow-lg transform rounded-lg w-68 m-auto mb-5 text-pridark" key={elem?.id}>
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
                            {formatMoney(elem?.minAmount, project.Currency?.name)} OR MORE
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
    );
}

export default RewardCard;
