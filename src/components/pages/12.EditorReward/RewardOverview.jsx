import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "../../../config/axios";

function RewardOverview({ setShowRewardOverview, setShowRewardDetail, newReward, setNewReward }) {
    const { projectId } = useParams();
    const { title, description, image } = newReward;
    const [err, setErr] = useState({ title: "", description: "", image: "" });
    const [rewardImageStatus, setRewardImageStatus] = useState(false);

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setNewReward((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else {
            setNewReward((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    const handleChangeFile = async (e) => {
        try {
            setRewardImageStatus(true);
            const formData = new FormData();
            formData.append("upload-image", e.target.files[0]);
            const res = await axios.post("/uploads/image", formData);
            alert("upload image success");
            setRewardImageStatus(false);
            setNewReward((currentState) => ({ ...currentState, image: res.data?.imageUrl }));
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setErr((currentState) => ({ ...currentState, image: err.response?.data?.msg }));
            }
            console.dir(err);
        }
    };

    const buttonNextDisabled = !title || !description || !image;

    return (
        <div className="w-1/2">
            <div className="flex flex-row justify-between mx-5">
                <div className="flex flex-row items-center">
                    <Link to={`/edit-project/${projectId}/reward`}>
                        <HiArrowNarrowLeft className="text-xl mr-3 cursor-pointer" />
                    </Link>
                    <h1 className="font-semibold text-xl">New Reward</h1>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    <button
                        className={`bg-prigreen hover:bg-green-900 h-8 w-16 text-md text-white rounded-lg ${
                            buttonNextDisabled ? "opacity-50" : "opacity-100"
                        }`}
                        onClick={() => {
                            setShowRewardOverview(false);
                            setShowRewardDetail(true);
                        }}
                        // disabled={buttonNextDisabled}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="h-150 overflow-y-auto mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
                <div className="mt-10">
                    <h1>Reward overview</h1>
                </div>
                <div className="mt-7">
                    <label htmlFor="title" className="pb-2 text-sm  text-gray-800 dark:text-gray-100">
                        Title
                    </label>
                    <input
                        className="border w-full border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400 bg-white"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={handleChangeInput}
                    />
                    {err.title && <p className="text-xs pt-2 text-red-700">{err.title}</p>}
                </div>
                <div className="mt-7">
                    <label htmlFor="description" className="pb-2 text-sm text-gray-800 dark:text-gray-100">
                        Description
                    </label>
                    <textarea
                        className="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-full h-24"
                        name="description"
                        value={description}
                        onChange={handleChangeInput}
                    ></textarea>
                    {err.description && <p className="text-xs pt-2 text-red-700">{err.description}</p>}
                </div>
                <div className="my-7">
                    <label htmlFor="username" className="pb-2 text-sm text-gray-800 dark:text-gray-100">
                        Reward Image
                    </label>
                    <div className="relative">
                        {rewardImageStatus && (
                            <div className="absolute rounded-t-md backdrop-filter backdrop-blur-sm inset-0 z-0"></div>
                        )}
                        <img
                            className="rounded-t-md shadow-md w-144 h-96"
                            src={image || "https://picsum.photos/1920/1080"}
                            alt="coverImage"
                        />
                    </div>
                    <label className="w-full flex flex-col items-center justify-center px-4 py-6 bg-white rounded-b-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                        {!rewardImageStatus ? (
                            <>
                                <BsCloudArrowUpFill className="text-3xl" />
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                            </>
                        ) : (
                            <div className="w-10 h-10 border-4 border-pripurple rounded-full loader z-10"></div>
                        )}
                        <input className="hidden" type="file" name="rewardImage" onChange={handleChangeFile} />
                    </label>
                    {err.image && <p className="text-xs pt-2 text-red-700">{err.image}</p>}
                </div>
            </div>
        </div>
    );
}

export default RewardOverview;
