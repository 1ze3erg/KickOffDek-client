import React, { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import ProjectRewardCard from "./ProjectRewardCard";
import axios from "../../../config/axios";
import { useParams } from "react-router";

function ProjectActivity() {
  const [activities, setActivities] = useState([]);

  const { projectId } = useParams();
  console.log(projectId);

  useEffect(() => {
    axios
      .get(`/updates/get-by-project-id/${projectId}`)
      .then((res) => {
        setActivities(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <h1 className="text-2xl font-bold my-2">Activity</h1>
        {activities.map((elem) => {
          return <ActivityCard key={elem.id} {...elem} />;
        })}
      </div>
    </div>
  );
}

export default ProjectActivity;
