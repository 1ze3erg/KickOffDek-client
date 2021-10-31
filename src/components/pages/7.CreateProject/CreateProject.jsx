import { Link } from "react-router-dom";
import CreateProjectDetail from "./CreateProjectDetail";
import CreateProjectType from "./CreateProjectType";
import CreateProjectVisual from "./CreateProjectVisual";
import PreviewCreate from "./PreviewCreate";

function CreateProject() {
    return (
        <div>
            <h1>Create Project</h1>
            <CreateProjectType />
            <CreateProjectDetail />
            <CreateProjectVisual />
            <PreviewCreate />
            <Link to="/create-success" className="text-blue-500 underline">Go to Create Success</Link>
        </div>
    );
}

export default CreateProject;
