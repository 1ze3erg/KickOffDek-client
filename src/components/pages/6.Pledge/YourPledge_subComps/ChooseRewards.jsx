import { formatMoney } from "../../../../helpers/format";

function ChooseRewards({ project, rewards, pledgeCreated, setPledgeCreated, chosenReward, setChosenReward }) {
    return (
        <>
            <div className="flex items-center justify-center my-3">
                <h1 className="text-2xl font-medium">Choose your reward</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 mr-7 my-5">
                {rewards
                    .sort((a, b) => a.minAmount - b.minAmount)
                    .map((elem) => (
                        <button
                            key={elem.id}
                            onClick={() => {
                                setChosenReward(elem);
                                setPledgeCreated((currentState) => ({
                                    ...currentState,
                                    rewardId: elem.id,
                                    quantity: 1,
                                    amount: elem.minAmount
                                }));
                            }}
                            className={`w-full rounded-xl bg-white h-10 hover:bg-prigreen hover:text-white border-2 border-prigreen ${
                                elem.id === pledgeCreated.rewardId ? "bg-prigreen text-white" : "text-prigreen"
                            }`}
                        >
                            {formatMoney(elem.minAmount, project.Currency?.name)} or More
                        </button>
                    ))}
            </div>
            <div className="flex flex-row">
                <div className="mt-7 flex flex-col mx-3">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Amount
                    </label>
                    <div className="flex flex-row items-center">
                        <span className="rounded-left border border-gray-300 px-3 py-3 text-sm">
                            {project.Currency?.name}
                        </span>
                        <input
                            className="border w-48 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 rounded-r text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                            type="text"
                            id="minAmount"
                            name="minAmount"
                            placeholder="Amount"
                            value={chosenReward.minAmount}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="mt-7 flex flex-col mx-3">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Quantity
                    </label>
                    <input
                        className="border w-24 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        placeholder="Quantity"
                        type="number"
                        id="quantity"
                        name="quantity"
                        max={chosenReward.maxQtyPerPledge}
                        min="1"
                        value={pledgeCreated.quantity}
                        onChange={(e) =>
                            setPledgeCreated((currentState) => ({
                                ...currentState,
                                quantity: +e.target.value,
                                amount: chosenReward.minAmount * e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mt-7 flex flex-col mx-3">
                    <label htmlFor="username" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Shipping
                    </label>
                    <select
                        id="shipping"
                        name="shipping"
                        required
                        className="border w-48 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                        placeholder="Shipping"
                    >
                        <option>International - US%10</option>
                        <option>Pickup at Bangkok - US%10</option>
                        <option>EMS - US%2</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default ChooseRewards;
