import { useState } from "react";
import { formatMoney } from "../../../helpers/format";
import ModalDetails from "./ModalDetails";

function MyPledgeItem({ pledgeInfo }) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="border-b border-gray-300 hover:bg-gray-200 grid grid-cols-12 grid-rows-2 py-5 px-5 gap-4 w-full items-center">
            <div className="col-span-10 flex justify-between font-medium">
                <span className="flex-1">Project :</span>
                <span className="flex-1">Pledge Date :</span>
                <span className="flex-1">Total Amount :</span>
                <span className="flex-1">Quantity :</span>
                <span className="flex-1">Est.Delivery: </span>
            </div>
            <button
                className="inline-flex bg-clear mx-3 text-prigreen rounded-full col-span-2 row-span-2 py-3 px-3 justify-center items-center hover:bg-gray-300"
                onClick={() => setOpenModal(true)}
            >
                Details
            </button>
            <div className="col-span-10 flex justify-between">
                <span className="flex-1">{pledgeInfo?.Reward.Project.title}</span>
                <span className="flex-1">{pledgeInfo?.pledgeDate.slice(0, 10)}</span>
                <span className="flex-1">
                    {formatMoney(pledgeInfo?.amount, pledgeInfo?.Reward.Project.Currency?.name)}
                </span>
                <span className="flex-1">{pledgeInfo?.quantity}</span>
                <span className="flex-1">
                    {pledgeInfo?.Reward.estDeliveryMonth || "N/A"} {pledgeInfo?.Reward.estDeliveryYear || "N/A"}
                </span>
            </div>
            {openModal && <ModalDetails closeModal={setOpenModal} pledgeInfo={pledgeInfo} />}
        </div>
    );
}

export default MyPledgeItem;
