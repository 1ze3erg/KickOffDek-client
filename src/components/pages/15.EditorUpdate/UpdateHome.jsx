import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import parse from "html-react-parser";
import axios from "../../../config/axios";

function UpdateHome({ setShowUpdateHome, setShowUpdateForm, updates, setUpdates }) {
    const { projectId } = useParams();

    const clickDelUpdate = async (id) => {
        try {
            if (window.confirm("Delete?")) {
                setUpdates((currentState) => currentState.filter((elem) => elem.id !== id));
                await axios.delete(`/updates/delete/${id}`);
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="">
            <div className="flex flex-row items-center justify-between mx-10 pt-5 pb-10">
                <div className="flex flex-row items-center">
                    <Link to={`/edit-project/${projectId}`}>
                        <HiArrowNarrowLeft className="text-xl mr-3" />
                    </Link>
                    <h1 className="font-semibold text-xl">Your updates</h1>
                </div>
                <button
                    className="flex flex-row items-center justify-center bg-priorange hover:bg-pripurple text-white px-5 py-3 rounded-lg"
                    onClick={() => {
                        setShowUpdateHome(false);
                        setShowUpdateForm(true);
                    }}
                >
                    <BsPlusLg />
                    <span className="mx-1">Add new</span>
                </button>
            </div>
            <div className="w-240 mx-auto flex flex-col">
                {updates
                    .map((elem) => (
                        <div
                            className="shadow-lg transform rounded-md mb-10 p-5 text-pridark border"
                            key={elem.id}
                        >
                            <div className="flex justify-between">
                                <h1 className="text-md font-regular text-gray-500 mb-5">
                                    {new Date(elem.updatedAt).toLocaleString("en-GB")}
                                </h1>
                                <div className="flex">
                                    <FaEdit className="text-xl cursor-default mr-10 opacity-50" />
                                    <BsFillTrashFill
                                        className="text-xl cursor-pointer"
                                        onClick={() => clickDelUpdate(elem.id)}
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl font-semibold mb-5">{elem.title}</h1>
                            <p className="">{parse(elem.message)}</p>
                        </div>
                    ))
                    .reverse()}
            </div>
        </div>
    );
}

export default UpdateHome;
