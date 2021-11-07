import { Link } from "react-router-dom";
import { FiHome, FiSettings } from "react-icons/fi";
import { BsGift, BsHeart } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function DashboardSidebar({ setShowHome, setShowPreference, setShowMyPledge, setShowSavedProject, setShowMyProject }) {
    return (
        <div className="mx-4 flex flex-col items-start mt-5 gap-5 text-lg font-semibold">
            <button
                onClick={() => {
                    setShowHome(true);
                    setShowPreference(false);
                    setShowMyPledge(false);
                    setShowSavedProject(false);
                    setShowMyProject(false);
                }}
                className="flex flex-row gap-2 items-center"
            >
                <FiHome />
                Home
            </button>
            <button
                onClick={() => {
                    setShowHome(false);
                    setShowPreference(true);
                    setShowMyPledge(false);
                    setShowSavedProject(false);
                    setShowMyProject(false);
                }}
                className="flex flex-row gap-2 items-center"
            >
                <FiSettings /> Preference
            </button>
            <button
                onClick={() => {
                    setShowHome(false);
                    setShowPreference(false);
                    setShowMyPledge(true);
                    setShowSavedProject(false);
                    setShowMyProject(false);
                }}
                className="flex flex-row gap-2 items-center"
            >
                <BsGift />
                My Pledge
            </button>
            <button
                onClick={() => {
                    setShowHome(false);
                    setShowPreference(false);
                    setShowMyPledge(false);
                    setShowSavedProject(true);
                    setShowMyProject(false);
                }}
                className="flex flex-row gap-2 items-center"
            >
                <BsHeart />
                Saved Project
            </button>
            <h1>Creating</h1>
            <button
                onClick={() => {
                    setShowHome(false);
                    setShowPreference(false);
                    setShowMyPledge(false);
                    setShowSavedProject(false);
                    setShowMyProject(true);
                }}
                className="flex flex-row gap-2 items-center"
            >
                <MdOutlineDashboardCustomize />
                My Project
            </button>
            <Link to="/create-project">
                <button className="mt-10 px-2 ml-10 h-12 rounded-xl bg-priorange text-white hover:bg-red-500">
                    Create Campaign
                </button>
            </Link>
        </div>
    );
}

export default DashboardSidebar;
