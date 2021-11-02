import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function EditorCampaignDetail() {
    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex flex-row items-center">
                <Link to={{ pathname: "/project" }}>
                    <HiArrowNarrowLeft className="text-xl mr-3" />
                </Link>
                <h1 className="font-semibold text-xl mr-3">Campaign Details</h1>
                <button className="bg-green-700 text-white rounded-md h-7 w-24">
                    Save
                </button>
            </div>
            <div className="mt-8">
                <h1 className="text-sm ">Overview</h1>
            </div>
            <div className="flex flex-col py-4 my-5 w-full ">
                {/* Input Name */}
                <div className="flex flex-row h-10 my-5 border border-gray-300 rounded">
                    <input
                        name="title"
                        className="text-sm  rounded-l px-4 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        type="text"
                        placeholder="Write something here..."
                    ></input>
                    <span className="text-sm text-gray-600 focus: px-4 py-2 whitespace-no-wrap">34/35</span>
                </div>
                {/* Input Currency */}
                <div className=" my-5">
                    <div class="col-span-6 sm:col-span-4">
                        <select
                            id="currencyId"
                            name="currencyId"
                            class="mt-1 h-10 block w-full py-2 px-3 text-gray-600 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Currency</option>
                            {/* {currencies.map((elem) => (
                                <option key={elem.id} value={elem.id}>
                                    {elem.name}
                                </option>
                            ))} */}
                        </select>
                    </div>
                </div>
                {/* Input Target */}
                <div className="my-5">
                    <div className="mt-1 relative rounded shadow-sm border border-gray-300">
                        <div className="absolute inset-y-0 left-0 pl-3 h-10 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            type="text"
                            name="target"
                            id="target"
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="0.00"
                        />
                    </div>
                </div>
                {/* Input Date */}
                <div className="flex flex-row my-5">
                    <input
                        type="date"
                        placeholder="date...."
                        className="border border-gray-300 text-sm text-gray-600 w-full p-2 my-2 h-10 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        name="endDate"
                    />
                </div>
            </div>
        </div>
    );
}

export default EditorCampaignDetail;
