import { Link } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import UpdateHome from "./UpdateHome";

function EditorUpdate() {
    return (
        <div>
            <h1>Editor Update</h1>
            <UpdateHome />
            <UpdateForm />
            <Link to="/edit-project/1" className="text-blue-500 underline">
                Back to Editor Project
            </Link>
        </div>
    );
}

export default EditorUpdate;
