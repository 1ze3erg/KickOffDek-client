import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

function CreateProjectVisual({ setShowCampaignDetail, setShowProjectVisual }) {
    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3 bg-gray-100">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <MdKeyboardBackspace
                        className="text-2xl mr-2 cursor-pointer"
                        onClick={() => {
                            setShowCampaignDetail(true);
                            setShowProjectVisual(false);
                        }}
                    />
                    <h1 className="text-xl font-bold">Profile Visuals</h1>
                </div>
                <Link
                    to={{
                        pathname: "/create-success",
                    }}
                >
                    <button className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white">
                        Complete
                    </button>
                </Link>
            </div>
            <div className="flex flex-col py-2 w-full h-screen">
                <div className="">
                    <h1 className="text-sm ">Cover image</h1>
                </div>
                <div className="flex flex-col my-2 rounded items-center">
                    <img
                        className="rounded-t-md shadow-md"
                        src="https://res.cloudinary.com/dt93jhdvk/image/upload/v1635492631/tzmazxfajhrltnu5d64l.jpg"
                        alt="coverImage"
                    />
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <label class="w-full flex flex-col items-center px-4 py-3 bg-white rounded-b-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                            <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                            <span class="mt-2 text-sm leading-normal">Select a file</span>
                            <input className="hidden" type="file" name="coverImage" />
                        </label>
                    </div>
                    <div className="flex flex-row items-center ">
                        <FiAlertCircle className="text-xs text-gray-400" />
                        <span className="text-xs text-gray-400 px-2">Min. Width 1920px & Min. Height 1080px</span>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-sm ">Campaign Image</h1>
                </div>
                <div className="flex flex-col my-2 rounded items-center">
                    <img
                        className="rounded-t-md shadow-md"
                        src="https://res.cloudinary.com/dt93jhdvk/image/upload/v1635490045/o971jsraeawqana3pgtc.jpg"
                        alt="coverImage"
                    />
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <label class="w-full flex flex-col items-center px-4 py-3 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                            <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                            <span class="mt-2 text-base leading-normal">Select a file</span>
                            <input className="hidden" type="file" name="campaignImage" />
                        </label>
                    </div>
                    <div className="flex flex-row items-center ">
                        <FiAlertCircle className="text-xs text-gray-400" />
                        <span className="text-xs text-gray-400 px-2">Min. Width 1920px & Min. Height 1080px</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectVisual;
