import { useState } from "react";
import { useAppContext } from "../../../../contexts/AppContext";

function PledgeSummary({ pledgeCreated, shippingAddress, chosenReward }) {
    const { user } = useAppContext();
    const [Showdetails, setShowdetails] = useState(false);
    const [HideShow, setHideShow] = useState("Show details");

    const HideShowDetails = () => {
        if (!Showdetails) {
            setShowdetails(true);
            setHideShow("Hide details");
        } else {
            setShowdetails(false);
            setHideShow("Show details");
        }
    };

    return (
        <div className="grid grid-cols-3 gap-4 px-4 mx-10 text-sm">
            <div className="...">Supporter</div>
            <div className="col-span-2">{user.username}</div>
            <div className="...">Reward</div>
            <div className="col-span-2">
                <div className="flex justify-between">
                    <h1>{chosenReward?.title}</h1>
                    <h3>${pledgeCreated?.amount}</h3>
                </div>
                <button className="text-sm text-pripurple" onClick={HideShowDetails}>
                    {HideShow}
                </button>
                <div>{Showdetails && <h1 className="text-xs text-gray-400">{chosenReward?.description}</h1>}</div>
                <div className="flex justify-between">
                    <h1>Shipping</h1>
                    <h3>$0</h3>
                </div>
            </div>
            <div className="...">Total Amount</div>
            <div className="col-span-2">${+pledgeCreated?.amount + 0}</div>
            <div className="...">Estimate Delivery</div>
            <div className="col-span-2">
                {chosenReward?.estDeliveryMonth} {chosenReward?.estDeliveryYear}
            </div>
            <div className="...">Shipping Address</div>
            <div className="col-span-2">
                {shippingAddress?.address} {shippingAddress.province} {shippingAddress.country}{" "}
                {shippingAddress.postalCode}
            </div>
        </div>
    );
}

export default PledgeSummary;
