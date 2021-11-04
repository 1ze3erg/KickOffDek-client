import PledgeHeader from "./PledgeHeader";
import YourDetail from "./YourDetail";
import YourPayment from "./YourPayment";
import YourPledge from "./YourPledge";
import YourShippingAddress from "./YourShippingAddress";
import YourSummary from "./YourSummary";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";

function Pledge() {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  const [rewardsInfo, setRewardsInfo] = useState([]);
  const [chosenReward, setChosenReward] = useState({});
  const [chosen, setChosen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});
  const [addressCreated, setAddressCreated] = useState({});
  const [pledgeCreated, setPledgeCreated] = useState({});
  const [Show1, setShow1] = useState(true);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);
  const [Show5, setShow5] = useState(false);

  useEffect(() => {
    try {
      const fetchProject = async () => {
        const res = await axios.get(`/projects/get-by-id/${projectId}`);
        setProject(res.data);
      };
      const fetchReward = async () => {
        const res = await axios.get(`/rewards/get-by-project-id/${projectId}`);
        setRewardsInfo(res.data);
      };
      fetchProject();
      fetchReward();
    } catch (error) {
      console.log(error);
    }
  }, [projectId]);

  const { title, target, endDate } = project;

  return (
    <div>
      <PledgeHeader title={title} />
      <div className="mx-4">
        <YourPledge
          rewardsInfo={rewardsInfo}
          chosen={chosen}
          setChosen={setChosen}
          chosenReward={chosenReward}
          setChosenReward={setChosenReward}
          amount={amount}
          setAmount={setAmount}
          Show1={Show1}
          setShow1={setShow1}
          setShow2={setShow2}
        />
        <YourDetail
          setShow1={setShow1}
          setShow2={setShow2}
          setShow3={setShow3}
          Show2={Show2}
        />
        <YourPayment
          Show3={Show3}
          setShow3={setShow3}
          setShow2={setShow2}
          setShow4={setShow4}
          chosenReward={chosenReward}
          amount={amount}
          target={target}
          endDate={endDate}
        />
        <YourShippingAddress
          Show4={Show4}
          setShow4={setShow4}
          setShow3={setShow3}
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
          Show5={Show5}
          pledgeCreated={pledgeCreated}
          shippingInfo={shippingInfo}
          chosenReward={chosenReward}
        />
      </div>
    </div>
  );
}

export default Pledge;
