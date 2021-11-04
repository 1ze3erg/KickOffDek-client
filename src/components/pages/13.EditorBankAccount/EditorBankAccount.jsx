import { Link, useParams } from "react-router-dom";

function EditorBankAccount() {
    const { projectId } = useParams();
    return (
        <div>
            <h1>Editor Bank Account</h1>
            <Link to={`/edit-project/${projectId}`} className="text-blue-500 underline">
                Back to Editor Project
            </Link>
        </div>
    );
}

export default EditorBankAccount;
