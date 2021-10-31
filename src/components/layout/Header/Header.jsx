import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="flex justify-between bg-green-800 text-white w-full">
            <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                <div className="flex flex-row align-center">
                    <Link to="/home">
                        <img className="h-12 rounded-md drop-shadow-sm" src="https://picsum.photos/500" alt="logo" />
                    </Link>
                    <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                        <Link to="/explore">
                            <li>
                                <span className="hover:text-gray-200">Explore</span>
                            </li>
                        </Link>
                        <Link to="/about">
                            <li>
                                <span className="hover:text-gray-200">About</span>
                            </li>
                        </Link>
                        <Link to="/create-project">
                            <li>
                                <span className="hover:text-gray-200">Create</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="">
                    <ul className="hidden md:flex px-4 mx-auto space-x-12">
                        <Link to="/profile/izebergx">
                            <li>
                                <img
                                    className="h-12 rounded-md drop-shadow-sm"
                                    src="https://picsum.photos/500"
                                    alt="avatar"
                                />
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li>
                                <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">
                                    Dashboard
                                </button>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
