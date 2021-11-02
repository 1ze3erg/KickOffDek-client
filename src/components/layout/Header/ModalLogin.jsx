import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { FaGofore } from "react-icons/fa";
import { isEmail } from "validator";
import { GoogleLogin } from "react-google-login";
import axios from "../../../config/axios";
import { clientId } from "../../../config/key";
import { setRole, setToken } from "../../../helpers/localStorage";

function ModalLogin({ setShowLogin, setShowPassword, setShowRegister, setCheckedEmail }) {
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setEmail("");
            setErr("Email is required");
        } else if (!isEmail(e.target.value)) {
            setEmail(e.target.value);
            setErr("Email is invalid");
        } else {
            setEmail(e.target.value);
            setErr("");
        }
    };

    const clickCheckEmail = async (e) => {
        try {
            e.preventDefault();

            if (email.trim() === "") {
                setErr("email is required");
                return;
            }

            if (!err) {
                const res = await axios.post("/users/check-user-email", { email });
                if (res.data.haveAccount) {
                    setShowLogin(false);
                    setShowPassword(true);
                    setCheckedEmail(email);
                } else {
                    setShowLogin(false);
                    setShowRegister(true);
                    setCheckedEmail(email);
                }
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setErr(err.response?.data?.msg);
            }
            console.dir(err);
        }
    };

    const responseGoogle = async (response) => {
        try {
            const { imageUrl, email, googleId, givenName, familyName } = response.profileObj;
            const res = await axios.post("/users/login-with-google", {
                imageUrl,
                email,
                googleId,
                firstName: givenName,
                lastName: familyName,
            });
            console.log(res.data);
            setToken(res.data?.token);
            setRole(res.data?.role);
            setShowLogin(false);
            window.location.reload();
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div className="absolute backdrop-filter backdrop-blur-lg inset-0 z-0"></div>
                <div className="w-150 p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
                    <div className="text-center p-3 flex-auto justify-center">
                        <HiOutlineX
                            className="text-gray-900 absolute right-7 hover:text-red-800"
                            onClick={() => setShowLogin(false)}
                        />
                        <h2 className="text-2xl py-4 text-gray-900 ">Enter your email to login or register</h2>
                        <div className="flex flex-col mx-auto justify-center text-xl items-center text-purple-800">
                            <GoogleLogin
                                clientId={clientId}
                                render={(renderProps) => (
                                    <button
                                        className="flex flex-row mx-auto justify-center p-5 rounded-md hover:bg-gray-100"
                                        onClick={renderProps.onClick}
                                    >
                                        <FaGofore />
                                        <p className="text-sm px-3 font-semibold">Login with Google</p>
                                    </button>
                                )}
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                            <div>
                                <p className="text-sm text-gray-500 my-5">Or</p>
                            </div>
                            <form className="flex flex-col items-start">
                                <label
                                    htmlFor="username"
                                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                                >
                                    Email
                                </label>
                                <input
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-800 dark:text-gray-400"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    required
                                    value={email}
                                    onChange={handleChangeInput}
                                />
                                {err && <p className="text-xs pt-2 text-red-700">{err}</p>}
                                <div className="w-full">
                                    <button
                                        className=" w-full bg-purple-600 rounded-lg font-semibold text-white text-center mt-5 px-4 py-2 transition duration-300 ease-in-out hover:purple-blue-800"
                                        onClick={clickCheckEmail}
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <p className="text-sm text-green-700">
                            By registering with an account, you agree to the T&Cs and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
