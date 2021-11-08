import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { getToken, removeRole, removeToken } from "../../../helpers/localStorage";
import { IoClose } from "react-icons/io5";
import ModalChangePassword from "./ModalChangePassword";
import ModalLogin from "./ModalLogin";
import ModalPassword from "./ModalPassword";
import ModalRegister from "./ModalRegister";
import ModalSuccess from "./ModalSuccess";
import axios from "../../../config/axios";
import logo from "../img/KICKOFFDEKLight.jpg";

function Header() {
    const { auth, user, setUser } = useAppContext();
    const { pathname } = useLocation();
    console.log(pathname);
    console.log(pathname.slice(0, 7));

    const [showLogin, setShowLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [checkedEmail, setCheckedEmail] = useState("");

    useEffect(() => {
        if (getToken()) {
            axios
                .get("/users/get-user")
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => {
                    console.dir(err);
                });
        }
    }, [setUser]);

    const clickLogout = () => {
        removeToken();
        removeRole();
        window.location.reload();
    };

    const bgColor =
        pathname === "/explore" || pathname === "/about" || pathname.slice(0, 8) === "/project"
            ? "bg-pridark"
            : pathname.slice(0, 7) === "/pledge" || pathname.slice(0, 8) === "/profile"
            ? "bg-prigreen"
            : "bg-white";

    const textColor =
        pathname === "/explore" ||
        pathname === "/about" ||
        pathname.slice(0, 8) === "/project" ||
        pathname.slice(0, 7) === "/pledge" ||
        pathname.slice(0, 8) === "/profile"
            ? "text-white"
            : "text-black";

    const showEditorProjectHeader = pathname.slice(0, 13) === "/edit-project" ? true : false;
    const showPledgePage = pathname.slice(0, 7) === "/pledge" ? true : false;
    const showProfilePage = pathname.slice(0, 8) === "/profile" ? true : false;

    return (
        <nav className={`flex justify-between ${bgColor} ${textColor} w-full`}>
            <div className="text-lg px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                <div className="flex flex-row align-center gap-10">
                    {showPledgePage ? (
                        <h1 className="text-xl">Pledge</h1>
                    ) : showProfilePage ? (
                        <>
                            <h1 className="text-xl font-bold">Profile</h1>
                            <span>{user.username}</span>
                        </>
                    ) : (
                        <Link to="/home">
                            <img className="h-12 rounded-md drop-shadow-sm" src={logo} alt="logo" />
                        </Link>
                    )}
                    {!showEditorProjectHeader && !showPledgePage && !showProfilePage && (
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
                <div>
                    <ul className="hidden md:flex px-4 mx-auto space-x-12">
                        {auth ? (
                            showEditorProjectHeader ? (
                                <Link to="/dashboard">
                                    <button className="text-base font-medium text-gray-600 hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center">
                                        <IoClose className="text-lg mr-1" />
                                        <span>Close Editor</span>
                                    </button>
                                </Link>
                            ) : showPledgePage ? (
                                <Link to="/explore">
                                    <IoClose className="cursor-pointer text-xl my-3" />
                                </Link>
                            ) : showProfilePage ? (
                                <Link to="/dashboard">
                                    <IoClose className="cursor-pointer text-xl my-3" />
                                </Link>
                            ) : (
                                <div className="flex items-center">
                                    <Link to={`/profile/${user.username}`}>
                                        <li>
                                            <img
                                                className="w-14 h-14 rounded-full drop-shadow-sm mr-2"
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
