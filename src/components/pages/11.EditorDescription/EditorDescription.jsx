import { Link } from "react-router-dom";

function EditorDescription() {
    return (
        <div>
            <h1>Editor Description</h1>
            <Link to="/edit-project/1" className="text-blue-500 underline">
                Back to Editor Project
            </Link>
        </div>
    );
}

export default EditorDescription;
