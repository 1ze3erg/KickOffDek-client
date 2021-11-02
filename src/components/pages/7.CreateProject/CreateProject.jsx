import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "../../../config/axios";
import CreateCampaignDetail from "./CreateCampaignDetail";
import CreateProjectType from "./CreateProjectType";
import CreateProjectVisual from "./CreateProjectVisual";
import PreviewDesktopCreate from "./PreviewDesktopCreate";

function CreateProject() {
    const [input, setInput] = useState({
        typeId: 0,
        currencyId: "3",
        currency: "THB",
        title: "",
        target: "0",
        endDate: "",
        coverImage: "",
        campaignImage: "",
    });
    const [userInfo, setUserInfo] = useState({});
    const [showProjectType, setShowProjectType] = useState(true);
    const [showCampaignDetail, setShowCampaignDetail] = useState(false);
    const [showProjectVisual, setShowProjectVisual] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios
            .get("/users/get-user")
            .then((res) => {
                setUserInfo(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const clickCreateProject = async () => {
        try {
            console.log("create project");
            const res = await axios.post("/projects/create", input);
            history.push("/create-success", { projectId: res.data?.id });
        } catch (err) {
            console.dir(err);
        }
    };

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
                        input={input}
                        setInput={setInput}
                    />
                )}
                {showCampaignDetail && (
                    <CreateCampaignDetail
                        setShowProjectType={setShowProjectType}
                        setShowCampaignDetail={setShowCampaignDetail}
                        setShowProjectVisual={setShowProjectVisual}
                        input={input}
                        setInput={setInput}
                    />
                )}
                {showProjectVisual && (
                    <CreateProjectVisual
                        setShowCampaignDetail={setShowCampaignDetail}
                        setShowProjectVisual={setShowProjectVisual}
                        input={input}
                        setInput={setInput}
                        clickCreateProject={clickCreateProject}
                    />
                )}
                <PreviewDesktopCreate input={input} userInfo={userInfo} />
            </div>
        </>
    );
}

export default CreateProject;
