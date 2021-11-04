import React, { useState } from "react";

function PledgeSummary({ pledgeCreated, shippingInfo, chosenReward }) {
  const HideShowDetails = () => {
    if (!Showdetails) {
      setShowdetails(true);
      setHideShow("Hide details");
    } else {
      setShowdetails(false);
      setHideShow("Show details");
    }
  };
  const [Showdetails, setShowdetails] = useState(false);
  const [HideShow, setHideShow] = useState("Show details");
  return (
    <div className="grid grid-cols-3 gap-4 px-4 mx-10 text-sm">
      <div className="...">Supporter</div>
      <div className="col-span-2">{shippingInfo?.recipient}</div>
      <div className="...">Reward</div>
      <div className="col-span-2">
        <div className="flex justify-between">
          <h1>{chosenReward?.title}</h1>
          <h3>${pledgeCreated?.amount}</h3>
        </div>
        <button className="text-sm text-green-800" onClick={HideShowDetails}>
          {HideShow}
        </button>
        <div>
          {Showdetails && (
            <h1 className="text-xs text-gray-400">
              {chosenReward?.descriptions}
            </h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>Ship to {shippingInfo?.country}</h1>
          <h3>$20</h3>
        </div>
      </div>
      <div className="...">Total Amount</div>
      <div className="col-span-2">${+pledgeCreated?.amount + 20}</div>
      <div className="...">Estimate Delivery</div>
      <div className="col-span-2">
        {chosenReward?.estDeliveryMonth}/ {chosenReward?.estDeliveryYear}
      </div>
      <div className="...">Supporter Number</div>
      <div className="col-span-2">{pledgeCreated?.id}</div>
      <div className="...">Reward</div>
      <div className="col-span-2">{chosenReward?.title}</div>
    </div>
  );
}

export default PledgeSummary;
