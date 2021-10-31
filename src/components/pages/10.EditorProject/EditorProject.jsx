import { Link } from "react-router-dom";
import EditorCampaignDetail from "./EditorCampaignDetail";
import EditorProfileDetail from "./EditorProfileDetail";
import EditorSidebar from "./EditorSidebar";
import EditorVisual from "./EditorVisual";
import PreviewEdit from "./PreviewEdit";

function EditorProject() {
    return (
        <div>
            <h1>Editor Project</h1>
            <EditorSidebar />
            <EditorCampaignDetail />
            <EditorProfileDetail />
            <EditorVisual />
            <PreviewEdit />
            <Link to="/dashboard" className="text-blue-500 underline">
                Back to Dashboard
            </Link>
            <br />
            <Link to="/edit-project/:projectId/description" className="text-blue-500 underline">
                Go to Editor Description
            </Link>
            <br />
            <Link to="/edit-project/:projectId/reward" className="text-blue-500 underline">
                Go to Editor Reward
            </Link>
            <br />
            <Link to="/edit-project/:projectId/bank-account" className="text-blue-500 underline">
                Go to Editor Bank Account
            </Link>
            <br />
            <Link to="/edit-project/:projectId/launch" className="text-blue-500 underline">
                Go to Editor Launch
            </Link>
            <br />
            <Link to="/edit-project/:projectId/update" className="text-blue-500 underline">
                Go to Editor Update
            </Link>
        </div>
    );
}

export default EditorProject;
