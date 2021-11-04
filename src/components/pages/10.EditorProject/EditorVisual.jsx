import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import axios from "../../../config/axios";

function EditorVisual({ setShowSidebar, setShowVisual, project, setProject }) {
    const { coverImage, campaignImage } = project;
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
            setProject((currentState) => ({ ...currentState, [e.target.name]: res.data?.imageUrl }));
        } catch (err) {
            console.dir(err);
        }
    };

    const clickSave = async () => {
        try {
            const res = await axios.put(`/projects/update/${project.id}`, { coverImage, campaignImage });
            alert(res.data?.msg);
        } catch (err) {
            if (err.response && err.response?.status === 400) {
                alert(err.response?.data?.msg);
            }
            console.dir(err);
        }
    };

    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <MdKeyboardBackspace
                        className="text-2xl mr-2 cursor-pointer"
                        onClick={() => {
                            setShowSidebar(true);
                            setShowVisual(false);
                        }}
                    />
                    <h1 className="text-xl font-bold">Profile Visuals</h1>
                </div>
                <button
                    className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white"
                    onClick={clickSave}
                >
                    Save
                </button>
            </div>
            <div className="flex flex-col py-2 pr-2 w-full h-150 overflow-y-scroll">
                <div className="mb-5">
                    <div className="my-5">
                        <h1 className="text-sm">Cover image</h1>
                    </div>
                    <div className="flex flex-col my-2 rounded items-center">
                        <div className="relative">
                            {coverImageStatus && (
                                <div className="absolute rounded-t-md backdrop-filter backdrop-blur-sm inset-0 z-0"></div>
                            )}
                            <img
                                className="rounded-t-md shadow-md w-144 h-52"
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
                                    <div class="w-10 h-10 border-4 border-pripurple rounded-full loader z-10"></div>
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
                        <div className="flex flex-row items-center">
                            <FiAlertCircle className="text-xs text-gray-400" />
                            <span className="text-xs text-gray-400 px-2">Min. Width 1920px & Min. Height 1080px</span>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="my-5">
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
                            <label className="w-full flex flex-col items-center px-4 py-3 bg-white rounded-t-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-pripurple hover:text-white text-pripurple ease-linear transition-all duration-150">
                                {!campaignImageStatus ? (
                                    <>
                                        <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                                        <span className="mt-2 text-base leading-normal">Select a file</span>
                                    </>
                                ) : (
                                    <div class="w-10 h-10 border-4 border-pripurple rounded-full loader z-10"></div>
                                )}

                                <input
                                    className="hidden"
                                    type="file"
                                    name="campaignImage"
                                    onChange={handleChangeFile}
                                />
                            </label>
                        </div>
                        <div className="flex flex-row items-center ">
                            <FiAlertCircle className="text-xs text-gray-400" />
                            <span className="text-xs text-gray-400 px-2">Min. Width 1920px & Min. Height 1080px</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorVisual;
