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
    );
}

export default EditorProject;
