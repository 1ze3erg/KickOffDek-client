import Home from "../components/pages/1.Home/Home";
import EditorProject from "../components/pages/10.EditorProject/EditorProject";
import EditorDescription from "../components/pages/11.EditorDescription/EditorDescription";
import EditorReward from "../components/pages/12.EditorReward/EditorReward";
import EditorBankAccount from "../components/pages/13.EditorBankAccount/EditorBankAccount";
import EditorLaunch from "../components/pages/14.EditorLaunch/EditorLaunch";
import EditorUpdate from "../components/pages/15.EditorUpdate/EditorUpdate";
import About from "../components/pages/2.About/About";
import Explore from "../components/pages/3.Explore/Explore";
import Profile from "../components/pages/4.Profile/Profile";
import Project from "../components/pages/5.Project/Project";
import Pledge from "../components/pages/6.Pledge/Pledge";
import CreateProject from "../components/pages/7.CreateProject/CreateProject";
import CreateProjectSuccess from "../components/pages/8.CreateProjectSuccess/CreateProjectSuccess";
import Dashboard from "../components/pages/9.Dashboard/Dashboard";

const routes = {
    user: {
        route: [
            { path: "/home", component: Home },
            { path: "/about", component: About },
            { path: "/explore", component: Explore },
            { path: "/profile/:username", component: Profile },
            { path: "/project/:projectId", component: Project },
            { path: "/pledge/:projectId/:rewardId", component: Pledge },
            { path: "/create-project", component: CreateProject },
            { path: "/create-success", component: CreateProjectSuccess },
            { path: "/dashboard", component: Dashboard },
            { path: "/edit-project/:projectId/description", component: EditorDescription },
            { path: "/edit-project/:projectId/bank-account", component: EditorBankAccount },
            { path: "/edit-project/:projectId/reward", component: EditorReward },
            { path: "/edit-project/:projectId/launch", component: EditorLaunch },
            { path: "/edit-project/:projectId/update", component: EditorUpdate },
            { path: "/edit-project/:projectId", component: EditorProject },
        ],
        redirect: {
            from: "/",
            to: "/home",
        },
    },
    guest: {
        route: [
            { path: "/home", component: Home },
            { path: "/about", component: About },
            { path: "/explore", component: Explore },
            { path: "/project/:projectId", component: Project },
        ],
        redirect: {
            from: "/",
            to: "/home",
        },
    },
};

export { routes };
