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
        </div>
    );
}

export default CreateProject;
