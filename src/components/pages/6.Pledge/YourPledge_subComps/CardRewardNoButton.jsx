import React, { useState } from "react";
import { BsPerson, BsCalendarCheck } from "react-icons/bs";

function CardRewardNoButton({ chosenReward }) {
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
        <div className="overflow-hidden shadow-lg transform   rounded-lg w-72 m-auto mx-3">
            <div className="w-full block h-full">
                <img
                    className="h-44 w-full object-cover"
                    alt=""
                    src={
                        chosenReward?.image ??
                        "https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634232279/photo-1502680390469-be75c86b636f_u4mjrm.jpg"
                    }
                />

                <div className="bg-white w-full p-4 flex flex-col pt-4">
                    <div className="flex items-center justify-center">
                        <h1 className="text-sm">{chosenReward?.title}</h1>
                    </div>
                    <div>
                        <h1 className={`text-md text-purple-800 mt-4 ${ShowMore}`}>{chosenReward?.description}</h1>
                        <button onClick={showMore} className="text-sm text-green-800 font-semibold">
                            {HideShowButton}
                        </button>
                    </div>

                    <div className="flex flex-start text-xs mt-3 items-center">
                        <BsPerson />
                        <h1 className="ml-1">
                            {" "}
                            {chosenReward?.backerCount} chosen / {chosenReward?.limit} available
                        </h1>
                    </div>
                    <div className="flex flex-start text-xs mt-3">
                        <BsCalendarCheck />
                        <h1 className="ml-1">
                            {" "}
                            Est. delivery is {chosenReward?.estDeliveryMonth} {chosenReward?.estDeliveryYear}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRewardNoButton;
