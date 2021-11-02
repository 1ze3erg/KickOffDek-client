import { Link } from "react-router-dom";
import ProjectActivity from "./ProjectActivity";
import ProjectCampaign from "./ProjectCampaign";
import ProjectCommunity from "./ProjectCommunity";
import ProjectInfo from "./ProjectInfo";
import { useState } from "react";
import ProjectNav from "./ProjectNav";

function Project() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <ProjectInfo />
      <ProjectNav setPage={setPage} />
      {page === 1 ? (
        <ProjectCampaign />
      ) : page === 2 ? (
        <ProjectActivity />
      ) : (
        <ProjectCommunity />
      )}

      <Link to="/pledge/1/1" className="text-blue-500 underline">
        Go to Pledge
      </Link>
    </div>
  );
}

export default Project;
