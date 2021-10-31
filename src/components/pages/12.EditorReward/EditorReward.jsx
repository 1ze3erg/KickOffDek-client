import { Link } from "react-router-dom";
import ModalShippingOption from "./ModalShippingOption";
import PreviewReward from "./PreviewReward";
import RewardAdd from "./RewardAdd";
import RewardEdit from "./RewardEdit";

function EditorReward() {
    return (
        <div>
            <h1>Editor Reward</h1>
            <RewardAdd />
            <RewardEdit />
            <PreviewReward />
            <ModalShippingOption />
            <Link to="/edit-project/1" className="text-blue-500 underline">
                Back to Editor Project
            </Link>
        </div>
    );
}

export default EditorReward;
