import { Link } from "react-router-dom";
import ProjectActivity from "./ProjectActivity";
import ProjectCampaign from "./ProjectCampaign";
import ProjectCommunity from "./ProjectCommunity";
import ProjectInfo from "./ProjectInfo";

function Project() {
    return (
        <div>
            <h1>Project</h1>
            <ProjectInfo />
            <ProjectCampaign />
            <ProjectActivity />
            <ProjectCommunity />
            <Link to="/pledge/1/1" className="text-blue-500 underline">Go to Pledge</Link>
        </div>
    );
}

export default Project;
