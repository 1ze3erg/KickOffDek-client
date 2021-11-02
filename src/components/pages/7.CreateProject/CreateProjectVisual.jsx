import { MdKeyboardBackspace } from "react-icons/md";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import axios from "../../../config/axios";
import { useState } from "react";

function CreateProjectVisual({ setShowCampaignDetail, setShowProjectVisual, input, setInput, clickCreateProject }) {
    const { coverImage, campaignImage } = input;
    const [coverImageStatus, setCoverImageStatus] = useState(false);
    const [campaignImageStatus, setCampaignImageStatus] = useState(false);

    const handleChangeFile = async (e) => {
        try {
            if (e.target.name === "coverImage") {
                setCoverImageStatus(true);
            } else if (e.target.name === "campaignImage") {
                setCampaignImageStatus(true);
            }
            const formData = new FormData();
            formData.append("upload-image", e.target.files[0]);
            const res = await axios.post("/uploads/image", formData);
            if (e.target.name === "coverImage") {
                setCoverImageStatus(false);
            } else if (e.target.name === "campaignImage") {
                setCampaignImageStatus(false);
            }
            setInput((currentState) => ({ ...currentState, [e.target.name]: res.data?.imageUrl }));
        } catch (err) {
            console.dir(err);
        }
    };

    const buttonNextDisabled = !coverImage || !campaignImage;

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
                <button
                    className={`py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white ${
                        buttonNextDisabled ? "opacity-50" : "opacity-100"
                    }`}
                    onClick={clickCreateProject}
                    disabled={buttonNextDisabled}
                >
                    Complete
                </button>
            </div>
            <div className="flex flex-col py-2 w-full h-screen">
                <div className="">
                    <h1 className="text-sm ">Cover image</h1>
                </div>
                <div className="flex flex-col my-2 rounded items-center">
                    <div className="relative">
                        {coverImageStatus && (
                            <div className="absolute rounded-t-md backdrop-filter backdrop-blur-sm inset-0 z-0"></div>
                        )}
                        <img
                            className="rounded-t-md shadow-md w-96 h-52"
                            src={coverImage || "https://picsum.photos/1920/1080"}
                            alt="coverImage"
                        />
                    </div>
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <label className="w-full flex flex-col items-center px-4 py-3 bg-white rounded-b-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-pripurple hover:text-white text-pripurple ease-linear transition-all duration-150">
                            {!coverImageStatus ? (
                                <>
                                    <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                                    <span className="mt-2 text-sm leading-normal">Select a file</span>
                                </>
                            ) : (
                                <div class="w-10 h-10 border-4 border-purple-600 rounded-full loader z-10"></div>
                            )}
                            <input
                                className="hidden"
                                type="file"
                                name="coverImage"
                                onChange={handleChangeFile}
                                disabled={coverImageStatus}
                            />
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
                    <div className="relative">
                        {campaignImageStatus && (
                            <div className="absolute rounded-t-md backdrop-filter backdrop-blur-sm inset-0 z-0"></div>
                        )}
                        <img
                            className="rounded-t-md shadow-md w-144 h-52"
                            src={campaignImage || "https://picsum.photos/1920/1080"}
                            alt="coverImage"
                        />
                    </div>
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <label className="w-full flex flex-col items-center px-4 py-3 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                            {!campaignImageStatus ? (
                                <>
                                    <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                                    <span className="mt-2 text-base leading-normal">Select a file</span>
                                </>
                            ) : (
                                <div class="w-10 h-10 border-4 border-purple-600 rounded-full loader z-10"></div>
                            )}

                            <input className="hidden" type="file" name="campaignImage" onChange={handleChangeFile} />
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
