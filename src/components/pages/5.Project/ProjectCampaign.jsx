import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { useParams } from "react-router-dom";

function ProjectCampaign() {
  const [project, setProject] = useState([]);
  const { projectId } = useParams();

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
  }, []);

  const { campaignImage, pitchVideo, campaignStory } = project;
  console.log(project);

  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <h1 className="text-2xl font-bold my-2">About this project</h1>
        <img
          className="my-2 mx-auto"
          src={campaignImage}
          alt="KickOffDek"
          width="300"
          height="200"
        />
        <p className="my-2">
          {campaignStory ? (
            campaignStory
          ) : (
            <h1 className="font-bold text-lg my-10">
              Project description is currently not available
            </h1>
          )}
        </p>
        <iframe
          className="my-2 mx-auto"
          src={pitchVideo}
          width="700"
          height="500"
        ></iframe>
        {/* <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
        </p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
        </p> */}
      </div>
    </div>
  );
}

export default ProjectCampaign;
