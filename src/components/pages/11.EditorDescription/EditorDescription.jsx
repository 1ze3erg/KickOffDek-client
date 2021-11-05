import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { CKEditor, CKFinder } from "@ckeditor/ckeditor5-react";
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

function EditorDescription() {
    const { projectId } = useParams();
    const [campaignStory, setCampaignStory] = useState("");
    const [budgetOverview, setBudgetOverview] = useState("");

    useEffect(() => {
        axios
            .get(`/projects/get-by-id/${projectId}`)
            .then((res) => {
                setCampaignStory(res.data.campaignStory);
                setBudgetOverview(res.data.budgetOverview);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [projectId]);

    const clickSave = async () => {
        try {
            const res = await axios.put(`/projects/update/${projectId}`, { campaignStory, budgetOverview });
            alert(res.data?.msg);
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div>
            <div className="mx-5 my-5 mb-12 flex flex-row items-center">
                <div className="flex items-center mr-8">
                    <Link to={{ pathname: "/edit-project/6" }}>
                        <HiArrowNarrowLeft className="text-2xl mr-2 cursor-pointer" />
                    </Link>
                    <h1 className="text-xl font-bold">Description</h1>
                </div>
                <button
                    className="py-1 px-4 border border-gray-700 rounded-xl bg-prigreen hover:bg-green-900 text-white"
                    onClick={clickSave}
                >
                    Save
                </button>
            </div>
            <div className="flex flex-col align-center items-center">
                <div>
                    <h1>STORY & PROJECT OUTLINE</h1>
                    <div className="w-192 m-12 p-px border rounded">
                        <CKEditor
                            editor={DecoupledEditor}
                            config={editorConfiguration}
                            data={campaignStory || ""}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                                setCampaignStory(data);
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
                <div>
                    <h1>Budget Overview</h1>
                    <div className="w-192 m-12 p-px border rounded">
                        <CKEditor
                            editor={DecoupledEditor}
                            config={editorConfiguration}
                            data={budgetOverview || ""}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                                setBudgetOverview(data);
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
            </div>
        </div>
    );
}

export default EditorDescription;
