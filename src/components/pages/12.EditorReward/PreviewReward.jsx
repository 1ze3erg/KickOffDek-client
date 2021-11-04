import { useState } from "react";
import { BsPerson, BsCalendarCheck } from "react-icons/bs";
import { BiInfinite } from "react-icons/bi";

function PreviewReward({ reward }) {
    const { title, description, image, minAmount, limit, estDeliveryMonth, estDeliveryYear } = reward;
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
        <div className="overflow-hidden shadow-lg transform rounded-lg w-72 m-auto mx-3 text-pridark">
            <div className="w-full block h-full">
                <img
                    className="h-48 w-full object-cover"
                    alt="rewardImage"
                    src={image || "https://picsum.photos/1920/1080"}
                />
                <div className="bg-white w-full p-4 flex flex-col pt-4">
                    <div className="flex items-center justify-center">
                        <h1 className="text-sm">{title}</h1>
                    </div>
                    <div>
                        <h1 className={`text-md text-purple-800 mt-4 ${ShowMore}`}>{description}</h1>
                        <button onClick={showMore} className="text-sm text-green-800 font-semibold">
                            {HideShowButton}
                        </button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="rounded-lg bg-prigreen transition-colors duration-700   hover:bg-gray-700 text-white w-full h-10">
                            ${minAmount} OR MORE
                        </button>
                    </div>
                    <div className="flex flex-start text-xs mt-3 items-center">
                        <BsPerson />
                        <h1 className="ml-1"> 0 chosen / {limit || <BiInfinite className="inline" />} available</h1>
                    </div>
                    <div className="flex flex-start text-xs mt-3">
                        <BsCalendarCheck />
                        <h1 className="ml-1">
                            {" "}
                            Est. delivery is {estDeliveryMonth} {estDeliveryYear}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewReward;
