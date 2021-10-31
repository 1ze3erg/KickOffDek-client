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
        </div>
    );
}

export default EditorProject;
