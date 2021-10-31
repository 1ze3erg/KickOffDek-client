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
        </div>
    );
}

export default Dashboard;
