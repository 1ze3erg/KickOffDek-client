import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import DashboardSidebar from "./DashboardSidebar";
import MyPledge from "./MyPledge";
import MyProject from "./MyProject";
import Preference from "./Preference";
import Home from "./Home";
import Savedproject from "./Savedproject";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";

function Dashboard() {
    const { user } = useAppContext();
    const [showHome, setShowHome] = useState(true);
    const [showPreference, setShowPreference] = useState(false);
    const [showMyPledge, setShowMyPledge] = useState(false);
    const [showSavedProject, setShowSavedProject] = useState(false);
    const [showMyProject, setShowMyProject] = useState(false);

    return (
        <div className="min-h-screen flex flex-col sm:flex-row">
            <div className="w-full px-5 sm:w-96 bg-gray-100 text-prildark">
                <Link to={`/profile/${user.username}`}>
                    <div className="flex flex-row items-center gap-4 ml-3 mt-8">
                        <img className="w-12 h-12 rounded-full object-cover" src={user.avatar} alt="avatar" />
                        <div className="flex flex-row items-center gap-2">
                            <span>{user.username} </span>
                            <FiExternalLink />
                        </div>
                    </div>
                </Link>
                <DashboardSidebar
                    setShowHome={setShowHome}
                    setShowPreference={setShowPreference}
                    setShowMyPledge={setShowMyPledge}
                    setShowSavedProject={setShowSavedProject}
                    setShowMyProject={setShowMyProject}
                />
            </div>
            <div className="bg-gray-100 w-full">
                {showHome && <Home setShowHome={setShowHome} setShowMyProject={setShowMyProject} />}
                {showPreference && <Preference />}
                {showMyPledge && <MyPledge />}
                {showSavedProject && <Savedproject />}
                {showMyProject && <MyProject />}
            </div>
        </div>
    );
}

export default Dashboard;
