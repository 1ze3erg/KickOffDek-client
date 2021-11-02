import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { removeRole, removeToken } from "../../../helpers/localStorage";
import ModalChangePassword from "./ModalChangePassword";
import ModalLogin from "./ModalLogin";
import ModalPassword from "./ModalPassword";
import ModalRegister from "./ModalRegister";
import ModalSuccess from "./ModalSuccess";

function Header() {
    const { auth } = useAppContext();
    const { pathname } = useLocation();
    console.log(pathname);

    const [showLogin, setShowLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [checkedEmail, setCheckedEmail] = useState("");

    const clickLogout = () => {
        removeToken();
        removeRole();
        window.location.reload();
    };

    const bgColor =
        pathname === "/explore" ||
        pathname === "/about" ||
        pathname.slice(0, 8) === "/project" ||
        pathname.slice(0, 7) === "/pledge"
            ? "bg-green-800"
            : "bg-white";
    const textColor =
        pathname === "/explore" ||
        pathname === "/about" ||
        pathname.slice(0, 8) === "/project" ||
        pathname.slice(0, 7) === "/pledge"
            ? "text-white"
            : "text-black";
    return (
        <nav className={`flex justify-between ${bgColor} ${textColor} w-full`}>
            <div className="text-lg text-prigreen px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                <div className="flex flex-row align-center gap-10">
                    <Link to="/home">
                        <img className="h-12 rounded-md drop-shadow-sm" src="https://picsum.photos/500" alt="logo" />
                    </Link>
                    <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12 gap-5">
                        <Link to="/explore">
                            <li>
                                <span className="hover:text-gray-400 ">Explore</span>
                            </li>
                        </Link>
                        <Link to="/about">
                            <li>
                                <span className="hover:text-gray-400">About</span>
                            </li>
                        </Link>
                        {auth && (
                            <Link to="/create-project">
                                <li>
                                    <span className="hover:text-gray-400">Create</span>
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
                <div className="">
                    <ul className="hidden md:flex px-4 mx-auto space-x-12">
                        {auth ? (
                            <>
                                <Link to="/profile/izeberg">
                                    <li>
                                        <img
                                            className="h-12 rounded-md drop-shadow-sm"
                                            src="https://picsum.photos/500"
                                            alt="avatar"
                                        />
                                    </li>
                                </Link>
                                <li>
                                    <button
                                        className="inline-flex bg-prigreen text-white rounded-xl px-7 py-2 justify-center items-center hover:bg-gray-800"
                                        onClick={clickLogout}
                                    >
                                        Log Out
                                    </button>
                                </li>
                                <Link to="/dashboard">
                                    <li>
                                        <button className="inline-flex bg-pripurple text-white rounded-xl px-7 py-2 justify-center items-center hover:bg-purple-700">
                                            Dashboard
                                        </button>
                                    </li>
                                </Link>
                            </>
                        ) : (
                            <li>
                                <button
                                    className="inline-flex bg-prigreen text-white rounded-xl px-7 py-2 justify-center items-center hover:bg-gray-800"
                                    onClick={() => setShowLogin(true)}
                                >
                                    Sign in
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {showLogin && (
                <ModalLogin
                    setShowLogin={setShowLogin}
                    setShowPassword={setShowPassword}
                    setShowRegister={setShowRegister}
                    setCheckedEmail={setCheckedEmail}
                />
            )}
            {showPassword && (
                <ModalPassword
                    setShowLogin={setShowLogin}
                    setShowPassword={setShowPassword}
                    setShowChangePassword={setShowChangePassword}
                    checkedEmail={checkedEmail}
                />
            )}
            {showRegister && (
                <ModalRegister
                    setShowLogin={setShowLogin}
                    setShowRegister={setShowRegister}
                    setShowChangePassword={setShowChangePassword}
                    setShowSuccess={setShowSuccess}
                    checkedEmail={checkedEmail}
                />
            )}
            {showChangePassword && (
                <ModalChangePassword setShowLogin={setShowLogin} setShowChangePassword={setShowChangePassword} />
            )}
            {showSuccess && <ModalSuccess setShowSuccess={setShowSuccess} checkedEmail={checkedEmail} />}
        </nav>
    );
}

export default Header;
