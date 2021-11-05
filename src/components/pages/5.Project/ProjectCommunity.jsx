import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../../config/axios";

function ProjectCommunity() {
    const [comments, setComments] = useState([]);
    const { projectId } = useParams();

    const profilePic = "https://picsum.photos/80/80";

    useEffect(() => {
        axios
            .get(`/comments/get-by-project-id/${projectId}`)
            .then((res) => {
                setComments(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [projectId]);

    return (
        <div className="flex justify-start flex-col w-10/12 mx-auto p-5">
            <h1 className="text-2xl font-bold">Comments</h1>
            <textarea
                className="border border-gray-500 my-2"
                name="comment"
                id=""
                cols="80"
                rows="10"
                placeholder="write your comments here"
            ></textarea>
            <div className="flex justify-end">
                <button className="right-0 py-2 px-8 rounded-md border bg-green-800 text-white border-black">
                    Post
                </button>
            </div>
            {comments.map((elem) => (
                <div key={elem.id} className="py-6 flex justify-items-start items-center">
                    <img src={profilePic} alt="" className="rounded-full border border-gray-500" />
                    <div className="bg-purple-200 rounded-full p-5 mx-2">
                        <h1 className="px-2 font-bold">Username: {elem.userId}</h1>
                        <p className="px-2 inline-block">{elem.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCommunity;
