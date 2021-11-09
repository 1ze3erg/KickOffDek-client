import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
import ChooseRewards from "./YourPledge_subComps/ChooseRewards";
import PledgeSummaryAmount from "./YourPledge_subComps/PledgeSummaryAmount";
import CardRewardNoButton from "./YourPledge_subComps/CardRewardNoButton";

function YourPledge(props) {
    const {
        show1,
        setShow1,
        setShow2,
        project,
        rewards,
        chosenReward,
        setChosenReward,
        pledgeCreated,
        setPledgeCreated,
    } = props;
    
    return (
        <div className="my-3 flex-col">
            <div className="flex flex-row items-center">
                <h1 className="flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center">
                    {show1 ? 1 : <GiCheckMark />}
                </h1>
                <h1 className="mx-3 font-semibold">Your Pledge</h1>
                <h1 className="text-sm">{chosenReward?.title}</h1>
            </div>
            {/* Divide 2 sections */}
            {show1 && (
                <>
                    <div className="flex flex-row  justify-center">
                        <div className="w-1/2">
                            <ChooseRewards
                                project={project}
                                rewards={rewards}
                                pledgeCreated={pledgeCreated}
                                setPledgeCreated={setPledgeCreated}
                                chosenReward={chosenReward}
                                setChosenReward={setChosenReward}
                            />
                        </div>
                        <div className=" flex flex-col items-center justify-center w-1/2">
                            {/* Pledge Summary */}
                            <PledgeSummaryAmount
                                project={project}
                                chosenReward={chosenReward}
                                pledgeCreated={pledgeCreated}
                            />
                            {/* Card details */}
                            {pledgeCreated.rewardId ? (
                                <div className="">
                                    <CardRewardNoButton chosenReward={chosenReward} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {/* Button Detail Checkout */}
                    <div className="flex items-center justify-center mt-10">
                        <Link to={`/project/${project.id}`}>
                            <button className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3">
                                Back
                            </button>
                        </Link>
                        <button
                            onClick={() => {
                                setShow1(false);
                                setShow2(true);
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

export default YourPledge;
