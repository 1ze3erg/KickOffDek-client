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
        </div>
    );
}

export default EditorReward;
