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
        </div>
    );
}

export default Project;
