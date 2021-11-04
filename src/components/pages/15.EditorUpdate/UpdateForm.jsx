import { useState } from "react";
import { useParams } from "react-router";
import { CKEditor, CKFinder } from "@ckeditor/ckeditor5-react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import axios from "../../../config/axios";

const editorConfiguration = {
    plugins: CKFinder,
    ckfinder: {
        uploadUrl: "http://localhost:8888/uploads/editor-image",
    },
    fontSize: {
        options: [9, 11, 13, "default", 17, 19, 21],
    },
};

function UpdateForm({ setShowUpdateHome, setShowUpdateForm, setUpdates }) {
    const { projectId } = useParams();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [err, setErr] = useState({ title: "", message: "" });

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setTitle("");
            setErr((currentState) => ({ ...currentState, title: "title is required" }));
        } else {
            setTitle(e.target.value);
            setErr((currentState) => ({ ...currentState, title: "" }));
        }
    };

    const clickCreateNewUpdate = async () => {
        try {
            const res = await axios.post("/updates/create", { projectId, title, message });
            setUpdates((currentState) => [...currentState, res.data]);
            setShowUpdateHome(true);
            setShowUpdateForm(false);
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <>
            <div className="mx-5 my-5 mb-5 flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <HiArrowNarrowLeft
                        className="text-xl mr-3 cursor-pointer"
                        onClick={() => {
                            setShowUpdateHome(true);
                            setShowUpdateForm(false);
                        }}
                    />
                    <h1 className="font-semibold text-md">New Update</h1>
                </div>
                <button
                    className="bg-priorange hover:bg-pripurple px-5 py-3 text-md text-white rounded-lg"
                    onClick={clickCreateNewUpdate}
                >
                    Create Update
                </button>
            </div>
            <div className="container mx-auto w-192 mb-5">
                <label htmlFor="lastName" className="pb-2 text-lg font-bold text-pridark dark:text-gray-100">
                    Update Title
                </label>
                <input
                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400 mt-2"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleChangeInput}
                />
                {err.title && <p className="text-xs pt-2 text-red-700">{err.title}</p>}
            </div>
            <div className="container mx-auto w-192 mb-10">
                <h1 className="mb-5">STORY & PROJECT OUTLINE</h1>
                {err.message && <p className="text-xs pt-2 text-red-700">{err.message}</p>}
                <div className="w-192 p-px border rounded mt-2">
                    <CKEditor
                        editor={DecoupledEditor}
                        config={editorConfiguration}
                        data={message}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            if (data.trim() === "") {
                                setMessage("");
                                setErr((currentState) => ({ ...currentState, message: "message is required" }));
                            } else {
                                setMessage(data);
                                setErr((currentState) => ({ ...currentState, message: "" }));
                            }
                        }}
                        onReady={(editor) => {
                            editor.ui
                                .getEditableElement()
                                .parentElement.insertBefore(
                                    editor.ui.view.toolbar.element,
                                    editor.ui.getEditableElement()
                                );
                            editor.editing.view.change((writer) => {
                                writer.setStyle("height", "600px", editor.editing.view.document.getRoot());
                            });
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default UpdateForm;
