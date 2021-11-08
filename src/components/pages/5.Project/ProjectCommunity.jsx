import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../../config/axios";
import { useAppContext } from "../../../contexts/AppContext";

function ProjectCommunity() {
    const { projectId } = useParams();
    const { user } = useAppContext();
    const [comments, setComments] = useState([]);
    const [message, setMessage] = useState("");

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

    const handleChangeInput = (e) => {
        setMessage(e.target.value);
    };

    const clickAddComment = async () => {
        try {
            setComments((currentState) => [
                ...currentState,
                { User: { avatar: user.avatar, username: user.username }, message },
            ]);
            await axios.post("/comments/create", { projectId, message });
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="flex justify-start flex-col w-10/12 mx-auto px-12 py-5">
            <h1 className="text-3xl font-bold mb-3">Comments</h1>
            <textarea
                className="border border-gray-500 p-3 mb-3"
                name="comment"
                cols="80"
                rows="5"
                placeholder="write your comments here"
                value={message}
                onChange={handleChangeInput}
            ></textarea>
            <div className="flex justify-end mb-10">
                <button
                    className="right-0 py-2 px-8 rounded-md border bg-prigreen hover:bg-pridark text-white border-black"
                    onClick={clickAddComment}
                >
                    Post
                </button>
            </div>
            {comments
                .map((elem, idx) => (
                    <div key={idx} className="flex justify-items-start items-center mb-5">
                        <img
                            className="rounded-full border border-gray-500 w-16 h-16 mr-3"
                            src={elem?.User.avatar}
                            alt="avatar"
                        />
                        <div className="bg-gray-200 rounded-lg px-3 py-1">
                            <h1 className="px-2 font-bold">{elem?.User.username}</h1>
                            <p className="px-2 inline-block">{elem.message}</p>
                        </div>
                    </div>
                ))
                .reverse()}
        </div>
    );
}

export default ProjectCommunity;
