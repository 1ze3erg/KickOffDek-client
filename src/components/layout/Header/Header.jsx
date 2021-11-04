import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { removeRole, removeToken } from "../../../helpers/localStorage";
import { IoClose } from "react-icons/io5";
import ModalChangePassword from "./ModalChangePassword";
import ModalLogin from "./ModalLogin";
import ModalPassword from "./ModalPassword";
import ModalRegister from "./ModalRegister";
import ModalSuccess from "./ModalSuccess";
import axios from "../../../config/axios";

function Header() {
    const { auth } = useAppContext();
    const { pathname } = useLocation();
    console.log(pathname);
    console.log(pathname.slice(0, 13));

    const [user, setUser] = useState({});
    const [showLogin, setShowLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [checkedEmail, setCheckedEmail] = useState("");

    useEffect(() => {
        axios
            .get("/users/get-user")
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

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
            ? "bg-pridark"
            : "bg-white";

    const textColor =
        pathname === "/explore" ||
        pathname === "/about" ||
        pathname.slice(0, 8) === "/project" ||
        pathname.slice(0, 7) === "/pledge"
            ? "text-white"
            : "text-black";

    const showEditorProjectHeader = pathname.slice(0, 13) === "/edit-project" ? true : false;

    return (
        <nav className={`flex justify-between ${bgColor} ${textColor} w-full`}>
            <div className="text-lg px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                <div className="flex flex-row align-center gap-10">
                    <Link to="/home">
                        <img className="h-12 rounded-md drop-shadow-sm" src="https://picsum.photos/500" alt="logo" />
                    </Link>
                    {!showEditorProjectHeader && (
                        <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12 gap-5">
                            <Link to="/explore">
                                <li>
                                    <span className="hover:text-gray-500">Explore</span>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li>
                                    <span className="hover:text-gray-500">About</span>
                                </li>
                            </Link>
                            {auth && (
                                <Link to="/create-project">
                                    <li>
                                        <span className="hover:text-gray-500">Create</span>
                                    </li>
                                </Link>
                            )}
                        </ul>
                    )}
                </div>
                <div className="">
                    <ul className="hidden md:flex px-4 mx-auto space-x-12">
                        {auth ? (
                            !showEditorProjectHeader ? (
                                <div className="flex items-center">
                                    <Link to="/profile/izeberg">
                                        <li>
                                            <img
                                                className="w-14 rounded-full drop-shadow-sm mr-2"
                                                src={user?.avatar}
                                                alt="avatar"
                                            />
                                        </li>
                                    </Link>
                                    <li>
                                        <button
                                            className="inline-flex bg-prigreen text-white rounded-xl px-7 py-2 justify-center items-center hover:bg-green-900 mr-10"
                                            onClick={clickLogout}
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                    <Link to="/dashboard">
                                        <li>
                                            <button className="inline-flex bg-priorange text-white rounded-xl px-7 py-2 justify-center items-center hover:bg-pripurple">
                                                Dashboard
                                            </button>
                                        </li>
                                    </Link>
                                </div>
                            ) : (
                                <Link to="/dashboard">
                                    <button className="text-base font-medium text-gray-600 hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center">
                                        <IoClose className="text-lg mr-1" />
                                        <span>Close Editor</span>
                                    </button>
                                </Link>
                            )
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
