import { GiCheckMark } from "react-icons/gi";
import PledgeSummary from "./summary_subComps/PledgeSummary";

function YourSummary(props) {
    const {
        show1,
        show2,
        show3,
        show4,
        show5,
        setShow4,
        setShow5,
        pledgeCreated,
        payment,
        shippingAddress,
        chosenReward,
        clickConfirmPledge
    } = props;

    return (
        <div className="my-1">
            <div className="flex flex-row items-center ">
                <h1
                    className={`flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center ${
                        (show1 || show2 || show3 || show4) && "opacity-50"
                    }`}
                >
                    {show1 || show2 || show3 || show4 || show5 ? 5 : <GiCheckMark />}
                </h1>
                <h1 className="mx-3 font-semibold">Your Summary</h1>
                <h1 className="text-sm">{chosenReward.title}</h1>
            </div>
            {show5 && (
                <>
                    <div className="border border-gray-300 mx-auto w-2/3 rounded-lg my-10 py-10">
                        <PledgeSummary
                            pledgeCreated={pledgeCreated}
                            chosenReward={chosenReward}
                            shippingAddress={shippingAddress}
                            payment={payment}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                setShow4(true);
                                setShow5(false);
                            }}
                            className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Back
                        </button>
                        <button className="rounded-xl text-white bg-priorange hover:bg-red-500 px-5 py-2 text-md font-semibold mx-3" onClick={clickConfirmPledge}>
                            Confirm Pledge
                        </button>
                    </div>
                </>
            )}
            <div className="w-full bg-gray-300 h-px my-3"></div>
        </div>
    );
}

export default YourSummary;
