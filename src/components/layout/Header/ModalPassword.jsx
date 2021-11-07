import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { setRole, setToken } from "../../../helpers/localStorage";
import axios from "../../../config/axios";

function ModalPassword({ setShowLogin, setShowPassword, setShowChangePassword, checkedEmail }) {
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setPassword("");
            setErr("Password is required");
        } else {
            setPassword(e.target.value);
            setErr("");
        }
    };

    const clickLogin = async () => {
        try {
            if (password.trim() === "") {
                setPassword("");
                setErr("Password is required");
                return;
            }
            if (!err) {
                const res = await axios.post("/users/login-with-email", { email: checkedEmail, password });
                setToken(res.data?.token);
                setRole(res.data?.role);
                setPassword("");
                setShowPassword(false);
                window.location.reload();
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setErr(err.response?.data?.msg);
            }
            console.dir(err);
        }
    };

    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div
                    className="absolute backdrop-filter backdrop-blur-lg inset-0 z-0"
                    onClick={() => setShowPassword(false)}
                ></div>
                <div className="w-150 p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
                    <div className="text-center p-3 flex-auto justify-center">
                        <HiOutlineX
                            className="text-gray-900 absolute right-7 hover:text-red-800 cursor-pointer"
                            onClick={() => setShowPassword(false)}
                        />
                        <h2 className="text-2xl py-4 text-gray-900 ">You have a KICKOFFDEK account!</h2>
                        <div className="flex flex-row mx-auto justify-center text-xl items-center">
                            <div className="flex flex-row ">
                                <div className="flex items-center justify-center bg-green-800 w-16 h-16 rounded-full text-white mx-5">
                                    <span>User</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-black">{checkedEmail}</div>
                    </div>
                    <div className="flex flex-col mx-auto justify-center text-xl items-start w-11/12">
                        <label htmlFor="password" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                            Password
                        </label>
                        <input
                            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-800 dark:text-gray-400"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            required
                            value={password}
                            onChange={handleChangeInput}
                        />
                        {err && <p className="text-xs pt-2 text-red-700">{err}</p>}
                        <p className="text-sm py-5 text-gray-900">
                            By logging in using your account, you agree to the T&Cs and Privacy Policy.
                        </p>
                    </div>
                    <div className="p-3 w-11/12 mx-auto mt-2 text-center space-x-4 md:block">
                        <div className="flex justify-between items-center">
                            <button
                                className="flex flex-row items-center text-green-800"
                                onClick={() => {
                                    setShowLogin(true);
                                    setShowPassword(false);
                                }}
                            >
                                <HiOutlineArrowNarrowLeft />
                                <span className="px-3"> Login</span>
                            </button>
                            <div>
                                <button
                                    className="text-green-800"
                                    onClick={() => {
                                        setShowChangePassword(true);
                                        setShowPassword(false);
                                    }}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                            <div>
                                <button
                                    className="bg-purple-600 w-full rounded-lg font-semibold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:purple-blue-800 mr-6"
                                    onClick={clickLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPassword;
