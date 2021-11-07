import { useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import axios from "../../../config/axios";

function EditSecondStep({ user, setShow1, setShow2, setShow3 }) {
    const [userInfoChange, setUserInfoChange] = useState({
        biography: user.biography,
        tagline: user.tagline,
        province: user.province,
        country: user.country,
        phoneNumber: user.phoneNumber,
        avatar: user.avatar,
    });
    const [avatarStatus, setAvatarStatus] = useState(false);

    const clickNext = async (e) => {
        try {
            e.preventDefault();
            await axios.put(`/users/update-user`, {
                biography: userInfoChange.biography,
                tagline: userInfoChange.tagline,
                province: userInfoChange.province,
                country: userInfoChange.country,
                phoneNumber: userInfoChange.phoneNumber,
                avatar: userInfoChange.avatar
            });
            setShow2(false);
            setShow3(true);
        } catch (err) {
            console.dir(err);
        }
    };

    const clickBack = async (e) => {
        setShow2(false);
        setShow1(true);
    };
    const changeValueInput = (e) => {
        setUserInfoChange((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    };

    const handleChangeFile = async (e) => {
        try {
            setAvatarStatus(true);
            const formData = new FormData();
            formData.append("upload-image", e.target.files[0]);
            const res = await axios.post("/uploads/image", formData);
            alert("upload image success");
            setAvatarStatus(false);
            setUserInfoChange((currentState) => ({ ...currentState, avatar: res.data?.imageUrl }));
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <>
            <div className="flex flex-row my-2">
                <div className="w-1/2 ml-5">
                    <div className="my-2 rounded items-center">
                        <h1 className="text-sm my-3">Biography</h1>
                        <textarea
                            className="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-96 h-20 text-pridark bg-gray-100"
                            name="biography"
                            value={userInfoChange.biography}
                            onChange={changeValueInput}
                        ></textarea>
                    </div>
                    <div>
                        <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
                            <h1 className="text-sm my-3">Tagline</h1>
                            <input
                                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="text"
                                name="tagline"
                                placeholder="Tagline"
                                value={userInfoChange.tagline}
                                onChange={changeValueInput}
                            />
                            <span className="h-full font-normal absolute text-center text-gray-800  text-base items-center justify-center w-8 top-11 right-0 pr-12 py-3">
                                0/45
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
                            <h1 className="text-sm my-3">Province</h1>
                            <input
                                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="text"
                                name="province"
                                placeholder="Province or City"
                                value={userInfoChange.province}
                                onChange={changeValueInput}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
                            <h1 className="text-sm my-3">Country</h1>
                            <input
                                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="text"
                                placeholder="Country"
                                name="country"
                                value={userInfoChange.country}
                                onChange={changeValueInput}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
                        <h1 className="text-sm my-3">Contact Number</h1>
                        <input
                            className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                            type="text"
                            name="phoneNumber"
                            placeholder="+76 856 9875 625"
                            value={userInfoChange.phoneNumber}
                            onChange={changeValueInput}
                        />
                    </div>
                    <div className="flex my-1 w-96 rounded flex-col mt-5">
                        <label htmlFor="image" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                            Profile Image
                        </label>
                        <div className="flex flex-col my-2 rounded items-center">
                            <div className="relative">
                                {avatarStatus && (
                                    <div className="absolute rounded-t-md backdrop-filter backdrop-blur-sm inset-0 z-0"></div>
                                )}
                                <img
                                    className="rounded-t-md shadow-md"
                                    src={userInfoChange.avatar || "https://picsum.photos/1920/1080"}
                                    alt="avatar"
                                />
                            </div>
                            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                <label className="w-full flex flex-col items-center px-4 py-3 bg-white rounded-b-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-pripurple hover:text-white text-pripurple ease-linear transition-all duration-150">
                                    {!avatarStatus ? (
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
                                        disabled={avatarStatus}
                                    />
                                </label>
                            </div>
                            <div className="flex flex-row items-center mx-5 ">
                                <FiAlertCircle className="text-xs text-gray-400" />
                                <span className="text-xs text-gray-400 px-2">Min. Width 200px & Min. Height 200px</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                    onClick={clickBack}
                >
                    Back
                </button>
                <button
                    className="rounded-xl text-white bg-priorange hover:bg-red-500 px-5 py-2 text-md font-semibold mx-3"
                    onClick={clickNext}
                >
                    Next & Save
                </button>
            </div>
        </>
    );
}

export default EditSecondStep;
