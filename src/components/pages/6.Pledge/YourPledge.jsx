import { Link } from "react-router-dom";
import ChooseRewards from "./YourPledge_subComps/ChooseRewards";
import PledgeSummaryAmount from "./YourPledge_subComps/PledgeSummaryAmount";
import CardRewardNoButton from "./YourPledge_subComps/CardRewardNoButton";

function YourPledge({
  rewardsInfo,
  chosen,
  setChosen,
  chosenReward,
  setChosenReward,
  amount,
  setAmount,
  Show1,
  setShow1,
  setShow2,
}) {
  return (
    <div className="my-3 flex-col">
      <div className="flex flex-row items-center">
        <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
          1
        </h1>
        <h1 className="mx-3">Your pledge</h1>
        <h1 className="text-sm">{chosenReward?.title}</h1>
      </div>
      {/* Divide 2 sections */}
      {Show1 && (
        <>
          <div className="flex flex-row  justify-center">
            <div className="w-1/2">
              <ChooseRewards
                rewards={rewardsInfo}
                setChosen={setChosen}
                chosenReward={chosenReward}
                setChosenReward={setChosenReward}
                amount={amount}
                setAmount={setAmount}
              />
            </div>
            <div className=" flex flex-col items-center justify-center w-1/2">
              {/* Pledge Summary */}
              <PledgeSummaryAmount
                chosenReward={chosenReward}
                amount={amount}
              />
              {/* Card details */}
              {chosen && (
                <div className="">
                  <CardRewardNoButton chosenReward={chosenReward} />
                </div>
              )}
            </div>
          </div>
          {/* Button Detail Checkout */}
          <div className="flex items-center justify-center">
            <Link to="/explore/project/activity/6">
              <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                Back
              </button>
            </Link>
            <button
              onClick={() => {
                setShow1(false);
                setShow2(true);
              }}
              className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
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
