import React, { useState } from "react";
import { BsPerson, BsCalendarCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProjectRewardCard({ id, title, description, image, minAmount, limit, estDeliveryMonth, estDeliveryYear }) {
    const [ShowMore, setShowMore] = useState("truncate");
    const [HideShowButton, setHideShowButton] = useState("Show more");

    const { projectId } = useParams();

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
        <div className="overflow-hidden shadow-lg transform rounded-lg w-68 m-auto mx-3 text-pridark my-5">
            <div className="w-full block h-full">
                <img
                    className="h-48 w-full object-cover"
                    alt=""
                    src={
                        image
                            ? image
                            : "https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634239095/photo-1537519646099-335112f03225_jwqufc.jpg"
                    }
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
                    <Link to={`/pledge/${projectId}/${id}`}>
                        <div className="flex justify-center mt-4">
                            <button className="rounded-lg bg-prigreen transition-colors duration-700   hover:bg-gray-700 text-white h-10 w-full">
                                {minAmount} or More
                            </button>
                        </div>
                    </Link>
                    <div className="flex flex-start text-xs mt-3 items-center">
                        <BsPerson />
                        <h1 className="ml-1"> 0 chosen / {limit} available</h1>
                    </div>
                    <div className="flex flex-start text-xs mt-3">
                        <BsCalendarCheck />
                        <h1 className="ml-1">
                            Est. delivery {estDeliveryMonth} {estDeliveryYear}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectRewardCard;
