import { BsCheck2Circle, BsChevronRight, BsFillPersonFill, BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { Link } from "react-router-dom";

function EditorSidebar() {
    const naveditor = [
        {
            name: "Campaigns Details",
            link: "",
        },
        {
            name: "Profile Details",
            link: "",
        },
        {
            name: "Visuals",
            link: "",
        },
        {
            name: "Descriptions",
            link: "/edit-project/1/description",
        },
        {
            name: "Rewards",
            link: "/edit-project/1/reward",
        },
        {
            name: "Payments",
            link: "/edit-project/1/bank-account",
        },
        {
            name: "Launch",
            link: "/edit-project/1/launch",
        },
    ];
    const navupdateproject = [
        {
            icon: <HiOutlineShare />,
            name: "Updates",
            link: "/edit-project/:projectId/update",
        },
        {
            icon: <BsFillPersonFill />,
            name: "Supporters",
        },

        {
            icon: <BsCurrencyDollar />,
            name: "Payments",
        },
    ];
    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-5">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold mr-8">Project Editor</h1>
                    <button className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-whiten text-white">
                        Launch
                    </button>
                </div>
            </div>
            <div className="">
                <h1 className="text-pridark text-md py-2">Edit</h1>
                <ul className="">
                    {naveditor.map((elem) => (
                        <Link to={{ pathname: elem.link }}>
                            <li>
                                <div className="flex items-center justify-between py-5 px-3 text-green-800 hover:bg-prilight rounded-md">
                                    <div className="flex">
                                        <BsCheck2Circle className="text-purple-800 text-xl" />
                                        <h1 className="mx-3">{elem.name}</h1>
                                    </div>
                                    <BsChevronRight className="text-xl" />
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
                <h1 className="text-pridark text-md py-2">Manage</h1>
                <ul className="">
                    {navupdateproject.map((elem) => (
                        <Link to={elem.link}>
                            <li>
                                <div className="flex items-center justify-between py-5 px-3 text-green-800 hover:bg-prilight rounded-md">
                                    <div className="flex">
                                        <div className="text-purple-800 text-xl">{elem.icon}</div>
                                        <h1 className="mx-3">{elem.name}</h1>
                                    </div>
                                    <BsChevronRight className="text-xl" />
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EditorSidebar;
