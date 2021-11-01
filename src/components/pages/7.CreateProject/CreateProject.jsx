import { useState } from "react";
import CreateCampaignDetail from "./CreateCampaignDetail";
import CreateProjectType from "./CreateProjectType";
import CreateProjectVisual from "./CreateProjectVisual";
import PreviewDesktopCreate from "./PreviewDesktopCreate";

function CreateProject() {
    const [showProjectType, setShowProjectType] = useState(true);
    const [showCampaignDetail, setShowCampaignDetail] = useState(false);
    const [showProjectVisual, setShowProjectVisual] = useState(false);
    return (
        <>
            <div className="col-span-12 h-1 bg-blue-200 rounded-full">
                <div
                    className={`${
                        showProjectType ? "w-1/3" : showCampaignDetail ? "w-2/3" : "w-3/3"
                    } h-full text-center text-xs text-white bg-pripurple rounded-full`}
                ></div>
            </div>
            <div className="grid grid-cols-12 min-h-screen bg-gray-100">
                {showProjectType && (
                    <CreateProjectType
                        setShowProjectType={setShowProjectType}
                        setShowCampaignDetail={setShowCampaignDetail}
                    />
                )}
                {showCampaignDetail && (
                    <CreateCampaignDetail
                        setShowProjectType={setShowProjectType}
                        setShowCampaignDetail={setShowCampaignDetail}
                        setShowProjectVisual={setShowProjectVisual}
                    />
                )}
                {showProjectVisual && (
                    <CreateProjectVisual
                        setShowCampaignDetail={setShowCampaignDetail}
                        setShowProjectVisual={setShowProjectVisual}
                    />
                )}
                <PreviewDesktopCreate />
            </div>
        </>
    );
}

export default CreateProject;
