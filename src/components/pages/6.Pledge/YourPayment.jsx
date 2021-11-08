import { GiCheckMark } from "react-icons/gi";
import PaymentDetail from "./payment_subComps/PaymentDetail";
import PledgeType from "./payment_subComps/PledgeType";
import CardRewardNoButton from "./YourPledge_subComps/CardRewardNoButton";
import PledgeSummaryAmount from "./YourPledge_subComps/PledgeSummaryAmount";

function YourPayment({ show1, show2, show3, setShow3, setShow2, setShow4, chosenReward, amount, target, endDate }) {
    let sumtotal = amount * +chosenReward.minAmount;

    return (
        <div className="my-1">
            <div className="flex flex-row items-center">
                <h1
                    className={`flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center ${
                        (show1 || show2) && "opacity-50"
                    }`}
                >
                    {show1 || show2 || show3 ? 3 : <GiCheckMark />}
                </h1>
                <h1 className="mx-3 font-semibold">Your Payment</h1>
                <h1 className="text-sm">US$ {sumtotal}</h1>
            </div>
            {show3 && (
                <>
                    <div className="flex flex-row justify-center mb-5">
                        <div className="w-1/2">
                            <PaymentDetail />
                        </div>

                        <div className=" flex flex-col items-center justify-center w-1/2">
                            {/* Pledge Summary */}

                            <PledgeSummaryAmount chosenReward={chosenReward} amount={amount} />
                            <PledgeType target={target} endDate={endDate} />
                            {/* Card details */}
                            <div className="">
                                <CardRewardNoButton chosenReward={chosenReward} />
                            </div>
                        </div>
                    </div>
                    {/* Button Confirm Payment*/}
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                setShow2(true);
                                setShow3(false);
                            }}
                            className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setShow3(false);
                                setShow4(true);
                            }}
                            className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
                        >
                            Confirm
                        </button>
                    </div>
                </>
            )}
            <div className="w-full bg-gray-300 h-px my-3"></div>
        </div>
    );
}

export default YourPayment;
