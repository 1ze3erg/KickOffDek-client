import { useState } from "react";
// import { BsFillCloudArrowUpFill } from "react-icons/bs";
// import { FiAlertCircle } from "react-icons/fi";
import axios from "../../../config/axios";

function EditFirstStep({ user, setShowProfile, setShowEditor, setShow1, setShow2 }) {
    const [userInfoChange, setUserInfoChange] = useState({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
    });
    const [err, setErr] = useState({
        username: ""
    });

    const clickNext = async () => {
        try {
            await axios.put(`/users/update-user`, {
                username: userInfoChange.username,
                firstName: userInfoChange.firstName,
                lastName: userInfoChange.lastName,
            });
            setShow2(true);
            setShow1(false);
        } catch (err) {
            console.dir(err);
        }
    };

    const changeValueInput = async (e) => {
        if (e.target.value.trim() === "") {
            setUserInfoChange((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else {
            setUserInfoChange((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    return (
        <div>
            <div className="flex flex-row">
                <div className="my-3 px-5  flex flex-col">
                    <label htmlFor="username" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                        Username
                    </label>
                    <input
                        className="border w-72 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={userInfoChange.username}
                        onChange={changeValueInput}
                    />
                    {err.username && <p className="text-xs pt-2 text-red-700">{err.username}</p>}
                </div>
                <div className="my-3 px-5  flex flex-col">
                    <label htmlFor="firstName" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                        Firstname
                    </label>
                    <input
                        className="border w-72 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={userInfoChange.firstName}
                        onChange={changeValueInput}
                    />
                </div>
                <div className="my-3 px-5 flex flex-col">
                    <label htmlFor="lastName" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                        Lastname
                    </label>
                    <input
                        className="border w-72 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={userInfoChange.lastName}
                        onChange={changeValueInput}
                    />
                </div>
            </div>
            {/* <div className="flex my-1 w-144 rounded flex-col mt-5 mx-5">
        <label
          htmlFor="image"
          className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
        >
          Cover Photo
        </label>
        <div className="relative flex w-full flex-wrap items-stretch">
          <label class="w-full h-80 flex flex-col items-center justify-center px-4 py-2 bg-white rounded-md shadow-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
            <BsFillCloudArrowUpFill className="text-3xl mr-3" />
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" class="hidden" id="coverPhoto" />
          </label>
        </div>
      </div>
      <div className="flex flex-row items-center mx-5 ">
        <FiAlertCircle className="text-xs text-gray-400" />
        <span className="text-xs text-gray-400 px-2">
          Min. Width 1920px & Min. Height 1080px
        </span>
      </div> */}
            <div className="flex items-center justify-center">
                <button
                    className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                    onClick={() => {
                        setShowProfile(true);
                        setShowEditor(false);
                    }}
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
        </div>
    );
}

export default EditFirstStep;
