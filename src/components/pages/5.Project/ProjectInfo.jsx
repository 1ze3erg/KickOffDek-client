import ExpCardPJ from "../3.Explore/ExpCardPJ";
import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";
import { useParams } from "react-router";

function ProjectInfo() {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  const { coverImage, title, tagline } = project;

  useEffect(() => {
    try {
      const fetchProjectById = async () => {
        const res = await axios.get(`/projects/get-by-id/${projectId}`);
        setProject(res.data);
      };
      fetchProjectById();
    } catch (error) {
      console.log(error);
    }
  }, [projectId]);

  const url = coverImage;
  return (
    <div
      style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
      className="relative h-screen"
    >
      <div className="absolute inset-x-20 inset-y-1/3 mx-2">
        <h1 className="text-6xl font-bold">{title}</h1>
        <h1 className="text-xl mt-2">{tagline}</h1>
      </div>
      <div className="absolute bottom-20 right-20">
        <ExpCardPJ {...project} />
      </div>
    </div>
  );
}

export default ProjectInfo;
