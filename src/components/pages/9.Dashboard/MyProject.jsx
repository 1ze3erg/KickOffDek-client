import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { Link } from "react-router-dom";
import axios from "../../../config/axios";
import MyProjectItem from "./MyProjectItem";

function MyProject() {
    const { user } = useAppContext();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("/projects/get-by-user-id")
            .then((res) => {
                setProjects(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div>
            <nav className="my-10 flex flex-row justify-between items-center w-full">
                <div className="ml-10 flex flex-row ">
                    <img
                        src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1635934306/Roll-Up-both-UAV-02.252.jpg_fyoh8f.png"
                        className="h-12 w-12 object-cover rounded-full"
                        alt="detailImage"
                    />
                    <div className="flex flex-col mx-3">
                        <span>Hi The Guy you know, welcome to your Dashboard!</span>
                        <span className="text-sm">
                            Update your details, get started with your own project or check on live campaigns.
                        </span>
                    </div>
                </div>
                <div className="mr-10 flex flex-row items-center">
                    <button className="bg-prigreen text-prilight mx-4 rounded-xl text-xl px-4 py-2">
                        Chat with our staff
                    </button>
                    <Link to={`/profile/${user.username}`}>
                        <button className="bg-priorange text-white rounded-xl text-xl px-4 py-2">
                            Preview Profile
                        </button>
                    </Link>
                </div>
            </nav>
            <div className="mx-4 mb-10">
                <div className="bg-green-100 text-pridark h-16 rounded-t-lg  flex items-center">
                    <h1 className="px-3 text-xl font-semibold">Current Projects</h1>
                </div>
                {
                    projects
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((elem) => <MyProjectItem projectInfo={elem} />)[0]
                }
            </div>
            <div className="mx-4 mb-10">
                <div className="py-5 border-b border-gray-300 flex items-center">
                    <h1 className="px-3 text-xl font-semibold">Other Projects</h1>
                </div>
                {projects.map((elem) => (
                    <MyProjectItem projectInfo={elem} />
                ))}
            </div>
        </div>
    );
}

export default MyProject;
