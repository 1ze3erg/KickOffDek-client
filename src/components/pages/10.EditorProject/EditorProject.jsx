import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EditorCampaignDetail from "./EditorCampaignDetail";
import EditorProfileDetail from "./EditorProfileDetail";
import EditorSidebar from "./EditorSidebar";
import EditorVisual from "./EditorVisual";
import PreviewEdit from "./PreviewEdit";
import axios from "../../../config/axios";

function EditorProject() {
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    console.log(project);
    const [showSidebar, setShowSidebar] = useState(true);
    const [showCampaignDetail, setShowCampaignDetail] = useState(false);
    const [showProfileDetail, setShowProfileDetail] = useState(false);
    const [showVisual, setShowVisual] = useState(false);

    useEffect(() => {
        axios
            .get(`/projects/get-by-id/${projectId}`)
            .then((res) => {
                console.log(res.data);
                setProject(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [projectId]);

    return (
        <>
            <div className="grid grid-cols-12 min-h-screen bg-gray-100">
                {showSidebar && (
                    <EditorSidebar
                        setShowSidebar={setShowSidebar}
                        setShowCampaignDetail={setShowCampaignDetail}
                        setShowProfileDetail={setShowProfileDetail}
                        setShowVisual={setShowVisual}
                    />
                )}
                {showCampaignDetail && (
                    <EditorCampaignDetail
                        setShowSidebar={setShowSidebar}
                        setShowCampaignDetail={setShowCampaignDetail}
                        project={project}
                        setProject={setProject}
                    />
                )}
                {showProfileDetail && (
                    <EditorProfileDetail
                        setShowSidebar={setShowSidebar}
                        setShowProfileDetail={setShowProfileDetail}
                        project={project}
                        setProject={setProject}
                    />
                )}
                {showVisual && (
                    <EditorVisual
                        setShowSidebar={setShowSidebar}
                        setShowVisual={setShowVisual}
                        project={project}
                        setProject={setProject}
                    />
                )}
                <PreviewEdit project={project} />
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
