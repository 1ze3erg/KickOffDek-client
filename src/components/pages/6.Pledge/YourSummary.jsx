import { Link } from "react-router-dom";
import PledgeSummary from "./summary_subComps/PledgeSummary";

function YourSummary({ Show5, pledgeCreated, shippingInfo, chosenReward }) {
  return (
    <div className="my-1">
      <div className="flex flex-row items-center ">
        <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
          5
        </h1>
        <h1 className="mx-3">Your summary</h1>
        <h1>{chosenReward.title}</h1>
      </div>
      {Show5 && (
        <>
          <div className="border border-gray-300 mx-auto w-2/3 rounded-lg my-10 py-10">
            <PledgeSummary
              pledgeCreated={pledgeCreated}
              chosenReward={chosenReward}
              shippingInfo={shippingInfo}
            />
          </div>
          <div className="flex items-center justify-center">
            <Link to="/">
              <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                Home
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3">
                Dashboard
              </button>
            </Link>
          </div>
        </>
      )}
      <div className="w-full bg-gray-300 h-px my-3"></div>
    </div>
  );
}

export default YourSummary;
