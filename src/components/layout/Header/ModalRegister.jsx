import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { isEmail } from "validator";

function ModalRegister({ setShowLogin, setShowRegister, setShowChangePassword, checkedEmail }) {
    const [input, setInput] = useState({ username: "", email: "", password: "" });
    const [err, setErr] = useState({});

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setInput((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else if (e.target.name === "email" && !isEmail(e.target.value)) {
            setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, email: "email is invalid" }));
        } else {
            setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };
    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div className="absolute backdrop-filter backdrop-blur-lg  inset-0 z-0"></div>
                <div className="w-150  p-3 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    <div className="text-center p-3 flex-auto justify-center">
                        <HiOutlineX
                            className="text-gray-900 absolute right-7 hover:text-red-800"
                            onClick={() => setShowRegister(false)}
                        />
                        <h2 className="text-2xl py-2 text-gray-900 ">You don't have KICKOFFDEK account</h2>
                        <h3 className="text-xl py-2 text-gray-900 ">Register account</h3>
                    </div>
                    <div className="flex flex-row mx-auto justify-center text-xl items-start w-11/12">
                        <div className="mr-5">
                            <label
                                htmlFor="username"
                                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                                Username
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-800 dark:text-gray-400"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter Username"
                                required
                                value={input.username}
                                onChange={handleChangeInput}
                            />
                            {err.username && <p className="text-xs pt-2 text-red-700">{err.username}</p>}
                        </div>
                    </div>
                    <div className="flex flex-row mx-auto justify-center text-xl items-start w-11/12">
                        <div className="mr-5">
                            <label htmlFor="email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Your email
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-800 dark:text-gray-400"
                                type="text"
                                id="email"
                                name="email"
                                required
                                placeholder="example@mail.com"
                                value={input.email || checkedEmail}
                                onChange={handleChangeInput}
                            />
                            {err.email && <p className="text-xs pt-2 text-red-700">{err.email}</p>}
                        </div>
                        <div className="">
                            <label
                                htmlFor="password"
                                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                                Password
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-800 dark:text-gray-400"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                                value={input.password}
                                onChange={handleChangeInput}
                            />
                            {err.password && <p className="text-xs pt-2 text-red-700">{err.password}</p>}
                            <div className="flex flex-row">
                                <div className="w-2/3 mt-3 h-1 bg-blue-200 rounded-full">
                                    <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                                </div>
                                <span className="px-4 pt-1 text-sm">Stronk</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mx-auto my-5 items-center w-11/12">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600"></input>
                        <p className="px-3 text-sm text-black">Receive our newsletter and new updates</p>
                    </div>
                    <div className="p-3 w-11/12 mx-auto mt-2 text-center space-x-4 md:block">
                        <div className="flex justify-between items-center">
                            <button
                                className="flex flex-row items-center text-black"
                                onClick={() => {
                                    setShowLogin(true);
                                    setShowRegister(false);
                                }}
                            >
                                <HiOutlineArrowNarrowLeft />
                                <span className="px-3 text-sm"> Login</span>
                            </button>
                            <button
                                className="flex flex-row items-center text-black"
                                onClick={() => {
                                    setShowChangePassword(true);
                                    setShowRegister(false);
                                }}
                            >
                                <span className="px-5 text-sm">Forgot Password?</span>
                            </button>
                            <div>
                                <button className="bg-purple-600 w-full rounded-lg font-semibold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:purple-blue-800 mr-6">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRegister;
