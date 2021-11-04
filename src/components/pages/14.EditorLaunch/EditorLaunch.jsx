import { Link, useParams } from "react-router-dom";

function EditorLaunch() {
    const { projectId } = useParams();
    return (
        <div>
            <h1>Editor Launch</h1>
            <Link to={`/edit-project/${projectId}`} className="text-blue-500 underline">
                Back to Editor Project
            </Link>
        </div>
    );
}

export default EditorLaunch;
