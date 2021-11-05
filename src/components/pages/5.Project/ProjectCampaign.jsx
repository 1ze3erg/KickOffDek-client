import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axios";
import parse from "html-react-parser";

function ProjectCampaign() {
    const { projectId } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        try {
            const fetchProject = async () => {
                const res = await axios.get(`/projects/get-by-id/${projectId}`);
                setProject(res.data);
            };
            fetchProject();
        } catch (error) {
            console.log(error);
        }
    }, [projectId]);

    const { campaignImage, pitchVideo, campaignStory } = project;
    console.log(project);

    return (
        <div className="grid grid-cols-4 w-10/12 mx-auto">
            <div className="col-span-3 mr-4">
                <h1 className="text-2xl font-bold my-2">About this project</h1>
                <img className="my-2 mx-auto" src={campaignImage} alt="KickOffDek" width="300" height="200" />
                <p className="my-2">
                    {campaignStory ? (
                        parse(campaignStory)
                    ) : (
                        <h1 className="font-bold text-lg my-10">Project description is currently not available</h1>
                    )}
                </p>
                <iframe className="my-2 mx-auto" src={pitchVideo} width="700" height="500" title="pitchVideo"></iframe>
            </div>
        </div>
    );
}

export default ProjectCampaign;
