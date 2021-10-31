import { Link } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import DashboardSidebar from "./DashboardSidebar";
import MyPledge from "./MyPledge";
import MyProject from "./MyProject";
import Preference from "./Preference";

function Dashboard() {
    return (
        <div>
            <h1>Dashborad</h1>
            <DashboardSidebar />
            <DashboardHome />
            <Preference />
            <MyPledge />
            <MyProject />
            <Link to="/edit-project/1" className="text-blue-500 underline">Go to Editor Project</Link>
            <br />
            <Link to="/profile/izeberg" className="text-blue-500 underline">Go to Profile</Link>
        </div>
    );
}

export default Dashboard;
