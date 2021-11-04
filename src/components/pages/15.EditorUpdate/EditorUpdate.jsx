import { useEffect, useState } from "react";
import { useParams } from "react-router";
import UpdateForm from "./UpdateForm";
import UpdateHome from "./UpdateHome";
import axios from "../../../config/axios";

function EditorUpdate() {
    const { projectId } = useParams();
    const [updates, setUpdates] = useState([]);
    const [showUpdateHome, setShowUpdateHome] = useState(true);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    useEffect(() => {
        axios
            .get(`/updates/get-by-project-id/${projectId}`)
            .then((res) => {
                setUpdates(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div>
            {showUpdateHome && (
                <UpdateHome
                    setShowUpdateHome={setShowUpdateHome}
                    setShowUpdateForm={setShowUpdateForm}
                    updates={updates}
                    setUpdates={setUpdates}
                />
            )}
            {showUpdateForm && (
                <UpdateForm
                    setShowUpdateHome={setShowUpdateHome}
                    setShowUpdateForm={setShowUpdateForm}
                    setUpdates={setUpdates}
                />
            )}
        </div>
    );
}

export default EditorUpdate;
