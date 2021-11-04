import { Link } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import DashboardSidebar from "./DashboardSidebar";
import MyPledge from "./MyPledge";
import MyProject from "./MyProject";
import Preference from "./Preference";
import { FiExternalLink } from "react-icons/fi";
import Home from "./Home";
import Savedproject from "./Savedproject";
import CurrentProject from "./CurrentProject";
import React, {useState} from 'react'

function Dashboard() {
    const [showHome, setShowHome] = useState(true)
    const [showPreference, setShowPreference] = useState(false);
    const [showMyPledge, setShowMyPledge] = useState(false);
    const [showSavedProject, setShowSavedProject] = useState(false);
    const [showMyProject, setShowMyProject] = useState(false)
    const [showCurrentProject, setShowCurrentProject] = useState(false)
    

  return (
    <div className="h-screen flex flex-col sm:flex-row">
      <div className="w-full px-5 sm:w-96 bg-gray-100 text-prildark">
        <div className="flex flex-row items-center gap-4 ml-3 mt-8">
          <img
            className=" w-12 h-12 rounded-full object-cover"
            src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634233044/portrait-white-man-isolated_53876-40306_mroojw.jpg"
          />
          <div className="flex flex-row items-center gap-2">
            <span>The guy you know </span>
            <FiExternalLink />
          </div>
        </div>
        <DashboardSidebar Home={setShowHome} Preference={setShowPreference} MyPledge={setShowMyPledge} SavedProject={setShowSavedProject} MyProject={setShowMyProject} CurrentProject={setShowCurrentProject}  />
      </div>
      <div className="bg-gray-100 w-full h-screen ">
        
        {showHome && <Home />}
        {showPreference && <Preference />}
        {showMyPledge && <MyPledge />}
        {showSavedProject && <Savedproject />}
        {showMyProject && <MyProject />}
        {showCurrentProject && <CurrentProject />}
        
      </div>
    </div>
  );
}

export default Dashboard;
