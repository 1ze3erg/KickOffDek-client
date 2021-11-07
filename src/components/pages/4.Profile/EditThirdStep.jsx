import { useState } from "react";
import axios from "../../../config/axios";

function EditThirdStep({ user, setShow2, setShow3, setShowProfile, setShowEditor }) {
    const [userInfoChange, setUserInfoChange] = useState({
        facebook: user.facebook,
        instagram: user.instagram,
        twitter: user.twitter,
        website: user.website,
    });

    const clickNext = async (e) => {
        try {
            await axios.put(`/users/update-user`, {
                facebook: userInfoChange.facebook,
                instagram: userInfoChange.instagram,
                twitter: userInfoChange.twitter,
                website: userInfoChange.website,
            });
            setShow3(false);
            setShowProfile(true);
            setShowEditor(false);
        } catch (err) {
            console.dir(err);
        }
    };

    const clickBack = () => {
        setShow3(false);
        setShow2(true);
    };

    const changeValueInput = (e) => {
        setUserInfoChange((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-4 w-144 my-10">
                {/* Input FB  */}
                <div className="my-2 rounded items-center">
                    <h1 className="text-sm my-3">Facebook</h1>
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                                facebook.com/
                            </span>
                        </div>
                        <input
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                            type="text"
                            name="facebook"
                            id="facebook"
                            value={userInfoChange.facebook}
                            onChange={changeValueInput}
                        />
                    </div>
                </div>
                {/* Input IG  */}
                <div className="my-2 rounded items-center">
                    <h1 className="text-sm my-3">Instagram</h1>
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">@</span>
                        </div>
                        <input
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                            type="text"
                            name="instagram"
                            id="instagram"
                            value={userInfoChange.instagram}
                            onChange={changeValueInput}
                        />
                    </div>
                </div>
                {/* Input TWIT  */}
                <div className="my-2 rounded items-center">
                    <h1 className="text-sm my-3">Twitter</h1>
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">@</span>
                        </div>
                        <input
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                            type="text"
                            name="twitter"
                            id="twitter"
                            value={userInfoChange.twitter}
                            onChange={changeValueInput}
                        />
                    </div>
                </div>
                {/* Input web url  */}
                <div className="my-2 rounded items-center">
                    <h1 className="text-sm my-3">Website</h1>
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">http://</span>
                        </div>
                        <input
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                            type="text"
                            name="website"
                            id="website"
                            value={userInfoChange.website}
                            onChange={changeValueInput}
                        />
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
                    Save & Preview
                </button>
            </div>
        </>
    );
}

export default EditThirdStep;
