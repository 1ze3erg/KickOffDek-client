import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PledgeHeader from "./PledgeHeader";
import YourDetail from "./YourDetail";
import YourPayment from "./YourPayment";
import YourPledge from "./YourPledge";
import YourShippingAddress from "./YourShippingAddress";
import YourSummary from "./YourSummary";
import axios from "../../../config/axios";

function Pledge() {
    const { projectId, rewardId } = useParams();
    const [chosenRewardId, setChosenRewardId] = useState(+rewardId);
    const [project, setProject] = useState({});
    const [rewards, setRewards] = useState([]);
    const [chosenReward, setChosenReward] = useState({});
    const [amount, setAmount] = useState(1);
    const [shippingInfo, setShippingInfo] = useState({});
    const [addressCreated, setAddressCreated] = useState({});
    const [pledgeCreated, setPledgeCreated] = useState({});
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    useEffect(() => {
        try {
            const fetchProject = async () => {
                const res = await axios.get(`/projects/get-by-id/${projectId}`);
                setProject(res.data);
            };
            const fetchReward = async () => {
                const res = await axios.get(`/rewards/get-by-project-id/${projectId}`);
                setRewards(res.data);
            };
            fetchProject();
            fetchReward();
        } catch (error) {
            console.log(error);
        }
    }, [projectId]);

    useEffect(() => {
        axios
            .get(`/rewards/get-by-id/${+rewardId}`)
            .then((res) => {
                setChosenReward(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [rewardId]);

    const { title, target, endDate } = project;

    return (
        <div>
            <PledgeHeader title={title} />
            <div className="px-16 py-5">
                <YourPledge
                    rewards={rewards}
                    chosenRewardId={chosenRewardId}
                    setChosenRewardId={setChosenRewardId}
                    chosenReward={chosenReward}
                    setChosenReward={setChosenReward}
                    amount={amount}
                    setAmount={setAmount}
                    show1={show1}
                    setShow1={setShow1}
                    setShow2={setShow2}
                />
                <YourDetail show1={show1} show2={show2} setShow1={setShow1} setShow2={setShow2} setShow3={setShow3} />
                <YourPayment
                    show1={show1}
                    show2={show2}
                    show3={show3}
                    setShow3={setShow3}
                    setShow2={setShow2}
                    setShow4={setShow4}
                    chosenReward={chosenReward}
                    amount={amount}
                    target={target}
                    endDate={endDate}
                />
                <YourShippingAddress
                    show1={show1}
                    show2={show2}
                    show3={show3}
                    show4={show4}
                    setShow3={setShow3}
                    setShow4={setShow4}
                    setShow5={setShow5}
                    shippingInfo={shippingInfo}
                    setShippingInfo={setShippingInfo}
                    amount={amount}
                    chosenReward={chosenReward}
                    addressCreated={addressCreated}
                    setAddressCreated={setAddressCreated}
                    setPledgeCreated={setPledgeCreated}
                />
                <YourSummary
                    show1={show1}
                    show2={show2}
                    show3={show3}
                    show4={show4}
                    show5={show5}
                    setShow4={setShow4}
                    setShow5={setShow5}
                    pledgeCreated={pledgeCreated}
                    shippingInfo={shippingInfo}
                    chosenReward={chosenReward}
                />
            </div>
        </div>
    );
}

export default Pledge;
