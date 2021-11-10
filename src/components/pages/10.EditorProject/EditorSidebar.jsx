import { BsCheck2Circle, BsChevronRight, BsFillPersonFill, BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

function EditorSidebar({ setShowSidebar, setShowCampaignDetail, setShowProfileDetail, setShowVisual }) {
    const { projectId } = useParams();
    const naveditor = [
        {
            name: "Campaigns Details",
            link: "",
            onClick: () => {
                setShowSidebar(false);
                setShowCampaignDetail(true);
            },
        },
        {
            name: "Profile Details",
            link: "",
            onClick: () => {
                setShowSidebar(false);
                setShowProfileDetail(true);
            },
        },
        {
            name: "Visuals",
            link: "",
            onClick: () => {
                setShowSidebar(false);
                setShowVisual(true);
            },
        },
        {
            name: "Descriptions",
            link: `/edit-project/${projectId}/description`,
        },
        {
            name: "Rewards",
            link: `/edit-project/${projectId}/reward`,
        },
        {
            name: "Payments",
            link: `/edit-project/${projectId}/bank-account`,
            disabled: true
        },
        {
            name: "Launch",
            link: `/edit-project/${projectId}/launch`,
        },
    ];
    const navupdateproject = [
        {
            icon: <HiOutlineShare />,
            name: "Updates",
            link: `/edit-project/${projectId}/update`,
        },
        {
            icon: <BsFillPersonFill />,
            name: "Supporters",
            link: "",
            disabled: true
        },

        {
            icon: <BsCurrencyDollar />,
            name: "Payments",
            link: "",
            disabled: true
        },
    ];
    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-5">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold mr-8">Project Editor</h1>
                    <Link to={`/edit-project/${projectId}/launch/`}>
                        <button className="py-2 px-5 rounded-xl bg-priorange hover:bg-pripurple text-white">
                            Launch
                        </button>
                    </Link>
                </div>
            </div>
            <div className="h-150 overflow-y-scroll">
                <h1 className="text-pridark text-md mb-1">Edit</h1>
                <ul className="">
                    {naveditor.map((elem, idx) => (
                        <Link to={!elem.disabled && elem.link} key={idx}>
                            <li onClick={elem.onClick} className={`${elem.disabled && "opacity-50 cursor-default"}`}>
                                <div className="flex items-center justify-between mr-2 py-5 px-3 text-green-800 hover:bg-prilight rounded-md">
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
                <h1 className="text-pridark text-md my-1">Manage</h1>
                <ul className="">
                    {navupdateproject.map((elem, idx) => (
                        <Link to={!elem.disabled && elem.link} key={idx}>
                            <li className={`${elem.disabled && "opacity-50 cursor-default"}`}>
                                <div className="flex items-center justify-between mr-2 py-5 px-3 text-green-800 hover:bg-prilight rounded-md">
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
