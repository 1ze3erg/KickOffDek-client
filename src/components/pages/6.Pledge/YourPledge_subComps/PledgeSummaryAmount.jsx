import React from "react";
import { formatMoney } from "../../../../helpers/format";

function PledgeSummaryAmount({ project, chosenReward, pledgeCreated }) {
    const totalPledge = formatMoney(pledgeCreated.quantity * chosenReward.minAmount || 0, project.Currency?.name);
    return (
        <div className="w-72 border border-gray-300 rounded-xl my-3">
            <div className="flex  justify-center my-4 text-2xl">Pledge Summary</div>
            <div className="flex flex-row justify-between px-4 my-1">
                <span>
                    {pledgeCreated.quantity}x {formatMoney(chosenReward.minAmount || 0, project.Currency?.name)}
                </span>
                <span>{totalPledge}</span>
            </div>
            <div className="flex flex-row justify-between px-4 my-1">
                <span>Shipping</span>
                <span>US$0</span>
            </div>
            <div className="flex flex-row justify-between px-4 my-3 font-semibold">
                <span>Total</span>
                <span>{totalPledge}</span>
            </div>
        </div>
    );
}

export default PledgeSummaryAmount;
