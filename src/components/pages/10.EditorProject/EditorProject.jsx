import { useState } from "react";
import { Link } from "react-router-dom";
import EditorCampaignDetail from "./EditorCampaignDetail";
import EditorProfileDetail from "./EditorProfileDetail";
import EditorSidebar from "./EditorSidebar";
import EditorVisual from "./EditorVisual";
import PreviewEdit from "./PreviewEdit";

function EditorProject() {
    const [showCampaignDetail, setShowCampaignDetail] = useState(false);
    const [showProfileDetail, setShowProfileDetail] = useState(false);
    const [showVisual, setShowVisual] = useState(false);
    return (
        <>
            <div className="grid grid-cols-12 min-h-screen bg-gray-100">
                <EditorSidebar
                    setShowCampaignDetail={setShowCampaignDetail}
                    setShowProfileDetail={setShowProfileDetail}
                    setShowVisual={setShowVisual}
                />
                {showCampaignDetail && <EditorCampaignDetail setShowCampaignDetail={setShowCampaignDetail} />}
                {showProfileDetail && <EditorProfileDetail setShowProfileDetail={setShowProfileDetail} />}
                {showVisual && <EditorVisual setShowVisual={setShowVisual} />}
                <PreviewEdit />
            </div>
            {/* <Link to="/dashboard" className="text-blue-500 underline">
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
            </Link> */}
        </>
    );
}

export default EditorProject;
