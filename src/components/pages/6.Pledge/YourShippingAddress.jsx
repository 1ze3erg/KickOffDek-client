import { GiCheckMark } from "react-icons/gi";
import ShipppingDetail from "./shipping_subComps/ShipppingDetail";

function YourShippingAddress(props) {
    const {
        show1,
        show2,
        show3,
        show4,
        setShow4,
        setShow3,
        setShow5,
        shippingAddress,
        setShippingAddress,
        pledgeCreated,
        setPledgeCreated,
    } = props;

    return (
        <div className="my-1">
            <div className="flex flex-row items-center">
                <h1
                    className={`flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center ${
                        (show1 || show2 || show3) && "opacity-50"
                    }`}
                >
                    {show1 || show2 || show3 || show4 ? 4 : <GiCheckMark />}
                </h1>
                <h1 className="mx-3 font-semibold">Your Shipping Address</h1>
                <h1 className="mr-2">{shippingAddress.recipient}</h1>
                <h1 className="mr-2">{shippingAddress.address}</h1>
                <h1 className="mr-2">{shippingAddress.province}</h1>
                <h1 className="mr-2">{shippingAddress.country}</h1>
                <h1 className="mr-2">{shippingAddress.postalCode}</h1>
            </div>
            {show4 && (
                <>
                    {/* Shipping Detail */}
                    <ShipppingDetail
                        setShippingAddress={setShippingAddress}
                        pledgeCreated={pledgeCreated}
                        setPledgeCreated={setPledgeCreated}
                    />
                    {/* Button */}
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                setShow3(true);
                                setShow4(false);
                            }}
                            className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setShow4(false);
                                setShow5(true);
                            }}
                            className="rounded-xl text-white bg-priorange hover:bg-red-500 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
            <div className="w-full bg-gray-300 h-px my-3"></div>
        </div>
    );
}

export default YourShippingAddress;
