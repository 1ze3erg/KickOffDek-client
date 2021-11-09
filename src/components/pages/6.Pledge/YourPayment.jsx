import { GiCheckMark } from "react-icons/gi";
import { formatMoney } from "../../../helpers/format";
import PaymentDetail from "./payment_subComps/PaymentDetail";
import PledgeType from "./payment_subComps/PledgeType";
import CardRewardNoButton from "./YourPledge_subComps/CardRewardNoButton";
import PledgeSummaryAmount from "./YourPledge_subComps/PledgeSummaryAmount";

function YourPayment(props) {
    const {
        show1,
        show2,
        show3,
        setShow3,
        setShow2,
        setShow4,
        project,
        chosenReward,
        payment,
        setPayment,
        pledgeCreated,
        setPledgeCreated,
    } = props;

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
                <h1 className="text-sm mr-2">
                    {formatMoney(pledgeCreated.quantity * chosenReward.minAmount || 0, project.Currency?.name)}
                </h1>
                <h1 className="text-sm mr-2">{payment.cardProvider}</h1>
                <h1 className="text-sm">
                    {payment.cardNumber && "**** **** ****"}&nbsp;
                    {payment.cardNumber?.substring(payment.cardNumber.length - 4, payment.cardNumber.length)}
                </h1>
            </div>
            {show3 && (
                <>
                    <div className="flex flex-row justify-center mb-5">
                        <div className="w-9/12">
                            <PaymentDetail
                                setPayment={setPayment}
                                pledgeCreated={pledgeCreated}
                                setPledgeCreated={setPledgeCreated}
                            />
                        </div>

                        <div className=" flex flex-col items-center justify-start w-3/12">
                            {/* Pledge Summary */}
                            <PledgeSummaryAmount
                                project={project}
                                chosenReward={chosenReward}
                                pledgeCreated={pledgeCreated}
                            />
                            <PledgeType
                                type={project.Type?.name}
                                target={project.target}
                                endDate={project.endDate}
                                currency={project.Currency?.name}
                            />
                            {/* Card details */}
                            <div className="">
                                <CardRewardNoButton chosenReward={chosenReward} />
                            </div>
                        </div>
                    </div>
                    {/* Button Confirm Payment*/}
                    <div className="flex items-center justify-center mt-10">
                        <button
                            onClick={() => {
                                setShow2(true);
                                setShow3(false);
                            }}
                            className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setShow3(false);
                                setShow4(true);
                            }}
                            className="rounded-xl text-white bg-priorange hover:bg-red-500 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
            <div className="w-full bg-gray-300 h-px my-3"></div>
        </div>
    );
}

export default YourPayment;
