import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ActivityCard from "./ActivityCard";
import axios from "../../../config/axios";

function ProjectActivity() {
    const { projectId } = useParams();
    const [activities, setActivities] = useState([]);

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
    }, [projectId]);

    return (
        <div className="px-12 py-5">
            <h1 className="text-3xl font-bold my-2 w-10/12 mx-auto">Activity</h1>
            {activities
                .map((elem) => {
                    return <ActivityCard key={elem.id} {...elem} />;
                })
                .reverse()}
        </div>
    );
}

export default ProjectActivity;
