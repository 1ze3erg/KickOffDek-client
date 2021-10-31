import { Link } from "react-router-dom";

function EditorLaunch() {
    return (
        <div>
            <h1>Editor Launch</h1>
            <Link to="/edit-project/1" className="text-blue-500 underline">
                Back to Editor Project
            </Link>
        </div>
    );
}

export default EditorLaunch;
