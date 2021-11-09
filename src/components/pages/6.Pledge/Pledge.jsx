import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PledgeHeader from "./PledgeHeader";
import YourDetail from "./YourDetail";
import YourPayment from "./YourPayment";
import YourPledge from "./YourPledge";
import YourShippingAddress from "./YourShippingAddress";
import YourSummary from "./YourSummary";
import axios from "../../../config/axios";

function Pledge() {
    const { projectId, rewardId } = useParams();
    const history = useHistory();
    const [project, setProject] = useState({});
    const [rewards, setRewards] = useState([]);
    const [chosenReward, setChosenReward] = useState({});
    const [payment, setPayment] = useState({});
    const [shippingAddress, setShippingAddress] = useState({});
    const [pledgeCreated, setPledgeCreated] = useState({
        rewardId: +rewardId,
        shippingAddressId: "",
        paymentId: "",
        amount: "",
        quantity: 1,
        pledgeDate: "",
    });
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
                setPledgeCreated((currentState) => ({ ...currentState, amount: res.data.minAmount }));
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [rewardId]);

    const clickConfirmPledge = async () => {
        try {
            const res = await axios.post("/pledges/create", { ...pledgeCreated, pledgeDate: new Date() });
            console.log(res.data);
            alert("Pledge has been created");
            history.push("/dashboard");
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div>
            <PledgeHeader title={project.title} />
            <div className="px-16 py-5">
                <YourPledge
                    project={project}
                    rewards={rewards}
                    chosenReward={chosenReward}
                    setChosenReward={setChosenReward}
                    show1={show1}
                    setShow1={setShow1}
                    setShow2={setShow2}
                    pledgeCreated={pledgeCreated}
                    setPledgeCreated={setPledgeCreated}
                />
                <YourDetail show1={show1} show2={show2} setShow1={setShow1} setShow2={setShow2} setShow3={setShow3} />
                <YourPayment
                    show1={show1}
                    show2={show2}
                    show3={show3}
                    setShow3={setShow3}
                    setShow2={setShow2}
                    setShow4={setShow4}
                    project={project}
                    chosenReward={chosenReward}
                    payment={payment}
                    setPayment={setPayment}
                    pledgeCreated={pledgeCreated}
                    setPledgeCreated={setPledgeCreated}
                />
                <YourShippingAddress
                    show1={show1}
                    show2={show2}
                    show3={show3}
                    show4={show4}
                    setShow3={setShow3}
                    setShow4={setShow4}
                    setShow5={setShow5}
                    shippingAddress={shippingAddress}
                    setShippingAddress={setShippingAddress}
                    pledgeCreated={pledgeCreated}
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
                    chosenReward={chosenReward}
                    payment={payment}
                    shippingAddress={shippingAddress}
                    pledgeCreated={pledgeCreated}
                    clickConfirmPledge={clickConfirmPledge}
                />
            </div>
        </div>
    );
}

export default Pledge;
