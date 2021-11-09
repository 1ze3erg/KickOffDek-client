import { useEffect, useState } from "react";
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "../../../../config/axios";

function ShipppingDetail({ setShippingAddress, pledgeCreated, setPledgeCreated }) {
    const [shippingAddresses, setShippingAddresses] = useState([]);
    const [newShippingAddress, setNewShippingAddress] = useState({
        recipient: "",
        address: "",
        province: "",
        country: "",
        postalCode: "",
        phoneNumber: "",
    });
    const [err, setErr] = useState({
        recipient: "",
        address: "",
        province: "",
        country: "",
        postalCode: "",
        phoneNumber: "",
    });
    const [showShippingAddressForm, setShowShippingAddressForm] = useState(false);

    useEffect(() => {
        axios
            .get("/shipping-addresses/get-by-user-id")
            .then((res) => {
                setShippingAddresses(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const changeValueInput = (e) => {
        if (e.target.value.trim() === "") {
            setNewShippingAddress((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else {
            setNewShippingAddress((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    const clickAddShippingAddress = async () => {
        try {
            const res = await axios.post("/shipping-addresses/create", newShippingAddress);
            setShippingAddresses((currentState) => [...currentState, res.data]);
            alert("Shipping Address has been created");
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center my-5">
                <h1 className="text-2xl font-medium">Choose Shipping Address</h1>
            </div>

            {shippingAddresses.map((elem, idx) => (
                <div
                    className={`shadow-lg rounded-md cursor-pointer flex w-144 py-2 mx-auto mb-5 hover:bg-prilight ${
                        pledgeCreated.shippingAddressId === elem.id ? "bg-prilight" : ""
                    }`}
                    onClick={() => {
                        setPledgeCreated((currentState) => ({ ...currentState, shippingAddressId: elem.id }));
                        setShippingAddress({
                            recipient: elem.recipient,
                            address: elem.address,
                            province: elem.province,
                            country: elem.country,
                            postalCode: elem.postalCode,
                            phoneNumber: elem.phoneNumber,
                        });
                    }}
                    key={elem.id}
                >
                    <div className="p-2 text-2xl">
                        {pledgeCreated.shippingAddressId === elem.id ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                    </div>
                    <div className="flex-1 flex items-center px-2">
                        <span className="mr-5">{idx + 1}</span>
                        <span className="mr-5">{elem.recipient}</span>
                        <span className="mr-5">{elem.address}</span>
                        <span className="mr-5">{elem.province}</span>
                        <span className="mr-5">{elem.country}</span>
                        <span className="mr-5">{elem.postalCode}</span>
                    </div>
                </div>
            ))}
            <div
                className="shadow-lg rounded-md cursor-pointer w-144 py-2 mx-auto mb-5 hover:bg-prilight flex justify-center items-center"
                onClick={() => setShowShippingAddressForm((currentState) => !currentState)}
            >
                <AiOutlinePlus className="text-xl" />
            </div>

            {showShippingAddressForm && (
                <>
                    <div className="flex items-center justify-center my-5">
                        <h1 className="text-2xl font-medium">Enter Shipping details</h1>
                    </div>
                    <div className="flex flex-col mx-auto items-center shadow-lg w-144 ">
                        <div className="my-3 px-5 w-full">
                            <label
                                htmlFor="recipient"
                                className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                            >
                                Recipient
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="text"
                                id="recipient"
                                name="recipient"
                                placeholder="John ChowRai"
                                value={newShippingAddress.recipient}
                                onChange={changeValueInput}
                            />
                            {err.recipient && <p className="text-xs pt-2 text-red-700">{err.recipient}</p>}
                        </div>
                        <div className="my-3 px-5 w-full">
                            <label
                                htmlFor="address"
                                className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                            >
                                Address
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="text"
                                id="address"
                                name="address"
                                placeholder="123/123 ABC Rd."
                                value={newShippingAddress.address}
                                onChange={changeValueInput}
                            />
                            {err.address && <p className="text-xs pt-2 text-red-700">{err.address}</p>}
                        </div>
                        <div className="my-3 flex flex-row px-5 w-full">
                            <div className="mr-2 w-1/2">
                                <label
                                    htmlFor="province"
                                    className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                                >
                                    Province
                                </label>
                                <input
                                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                    type="text"
                                    id="province"
                                    name="province"
                                    placeholder="Bangkok"
                                    value={newShippingAddress.province}
                                    onChange={changeValueInput}
                                />
                                {err.province && <p className="text-xs pt-2 text-red-700">{err.province}</p>}
                            </div>
                            <div className="ml-2 w-1/2">
                                <label
                                    htmlFor="country"
                                    className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100"
                                >
                                    Country
                                </label>
                                <input
                                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                    type="text"
                                    id="country"
                                    name="country"
                                    placeholder="Vietnam"
                                    value={newShippingAddress.country}
                                    onChange={changeValueInput}
                                />
                                {err.country && <p className="text-xs pt-2 text-red-700">{err.country}</p>}
                            </div>
                        </div>
                        <div className="my-3 flex flex-row px-5 w-full">
                            <div className="mr-2 w-1/2">
                                <label
                                    htmlFor="postalCode"
                                    className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                                >
                                    Postal Code
                                </label>
                                <input
                                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    placeholder="Postal Code"
                                    value={newShippingAddress.postalCode}
                                    onChange={changeValueInput}
                                />
                                {err.postalCode && <p className="text-xs pt-2 text-red-700">{err.postalCode}</p>}
                            </div>
                            <div className="ml-2 w-1/2">
                                <label
                                    htmlFor="phoneNumber"
                                    className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100"
                                >
                                    Contact Number
                                </label>
                                <input
                                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="+66 9876 5432 12"
                                    value={newShippingAddress.phoneNumber}
                                    onChange={changeValueInput}
                                />
                                {err.phoneNumber && <p className="text-xs pt-2 text-red-700">{err.phoneNumber}</p>}
                            </div>
                        </div>
                        <div className="my-3 px-5 w-full">
                            <button
                                className="bg-prigreen hover:bg-pridark text-white text-base px-5 py-3 w-full rounded"
                                onClick={clickAddShippingAddress}
                            >
                                Add Shipping Address
                            </button>
                        </div>
                    </div>
                </>
            )}
            <div className="flex justify-center items-center mt-10 mb-10">
                <h1 className="mx-3 text-xs">
                    Shipping status will be provided thorugh your email once the creator started ship your rewards.
                </h1>
            </div>
        </>
    );
}

export default ShipppingDetail;
