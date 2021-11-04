import ShipppingDetail from "./shipping_subComps/ShipppingDetail";
import axios from "../../../config/axios";

function YourShippingAddress({
  Show4,
  setShow4,
  setShow3,
  setShow5,
  shippingInfo,
  setShippingInfo,
  amount,
  chosenReward,
  addressCreated,
  setAddressCreated,
  setPledgeCreated,
}) {
  const total = amount * +chosenReward?.minAmount;
  const clickNextShipping = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post(`/shipping-addresses/create`, {
          recipient: shippingInfo.recipient,
          address: shippingInfo.address,
          phoneNumber: shippingInfo.phoneNumber,
          postalCode: shippingInfo.postalCode,
          province: shippingInfo.province,
          country: shippingInfo.country,
        })
        .then((res) => {
          console.log(res.data);
          setAddressCreated(res.data);
        });
    } catch (err) {
      console.dir(err);
    }
  };

  const clickConfirmPledge = async (e) => {
    try {
      await axios
        .post(`/pledges/create`, {
          rewardId: chosenReward.id,
          shippingAddressId: addressCreated.id,
          paymentId: 3,
          amount: total,
          quantity: amount,
          pledgeDate: new Date(),
        })
        .then((res) => {
          console.log(res.data);
          setPledgeCreated(res.data);
          alert("You are all set!");
          setShow4(false);
          setShow5(true);
        });
    } catch (err) {
      console.dir(err);
    }
  };
  return (
    <div className="my-1">
      <div className="flex flex-row items-center">
        <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
          4
        </h1>
        <h1 className="mx-3">Your shipping</h1>
      </div>
      {Show4 && (
        <>
          {/* Shipping Detail */}
          <ShipppingDetail setShippingInfo={setShippingInfo} />
          {/* Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                setShow3(true);
                setShow4(false);
              }}
              className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3"
            >
              Back
            </button>
            <button
              onClick={clickNextShipping}
              className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-48 h-10 text-md font-semibold mx-3"
            >
              Confirm Address
            </button>
            <button
              onClick={clickConfirmPledge}
              className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-48 h-10 text-md font-semibold mx-3"
            >
              Confirm Pledge
            </button>
          </div>
        </>
      )}
      <div className="w-full bg-gray-300 h-px my-3"></div>
    </div>
  );
}

export default YourShippingAddress;
