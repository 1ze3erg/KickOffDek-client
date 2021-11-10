import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from "../../../contexts/AppContext";
import axios from "../../../config/axios";

function Preference() {
    const { user } = useAppContext();
    const [shippingAddress, setShippingAddress] = useState({
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
    const [shippingAddresses, setShippingAddresses] = useState([]);

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
            setShippingAddress((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else {
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setShippingAddress((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
        }
    };

    const clickAddShippingAddress = async () => {
        try {
            let isError = true;
            Object.keys(shippingAddress).forEach((elem) => {
                if (shippingAddress[elem].trim() === "") {
                    setErr((currentState) => ({ ...currentState, [elem]: `${elem} is required` }));
                    isError = isError || true;
                } else {
                    isError = isError && false;
                }
            });

            if (!isError) {
                setShippingAddresses((currentState) => [...currentState, shippingAddress]);
                await axios.post("/shipping-addresses/create", shippingAddress);
                alert("Shipping address has been created");
            }
        } catch (err) {
            console.dir(err);
        }
    };

    const clickDelShippingAddress = async (id) => {
        try {
            if (window.confirm("Delete Shipping Address?")) {
                setShippingAddresses((currentState) => currentState.filter((elem) => elem.id !== id));
                await axios.delete(`/shipping-addresses/delete/${id}`);
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="w-3/4 ml-10 mt-12">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-medium">Preference</h1>
            </div>

            <div className="mt-10 flex flex-row justify-between border-b border-gray-300">
                <h1 className="font-medium text-lg my-3">Email</h1>
            </div>
            <div className="mt-10 px-5 border-b border-gray-300 pb-10">
                <input
                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400 bg-gray-200"
                    placeholder="John ChowRai"
                    type="text"
                    id="email"
                    name="email"
                    value={user.email}
                    disabled={true}
                />
                <h1 className="mt-2">This crowdfunding passport is registered through KickOffDek.</h1>
            </div>

            <div className="mt-10 flex flex-row justify-between border-b border-gray-300">
                <h1 className="font-medium text-lg my-3">My Shipping Address</h1>
            </div>
            {shippingAddresses.map((elem, idx) => (
                <div
                    className="grid grid-cols-12 border-b border-gray-300 px-7 py-2 gap-4 w-full items-center"
                    key={idx}
                >
                    <div className="col-span-2 flex justify-center items-center text-3xl">
                        <span>{idx + 1}</span>
                    </div>
                    <div className="col-span-8 flex flex-col justify-center items-start text-sm px-5">
                        <div className="py-2">
                            <span className="font-bold mr-2">Recipient :</span>
                            <span>{elem.recipient}</span>
                        </div>
                        <div className="py-2">
                            <span className="font-bold mr-2">Address :</span>
                            <span>{elem.address}</span>
                        </div>
                        <div className="py-2 flex">
                            <div className="mr-5">
                                <span className="font-bold mr-2">Province :</span>
                                <span>{elem.province}</span>
                            </div>
                            <div className="">
                                <span className="font-bold mr-2">Country:</span>
                                <span>{elem.country}</span>
                            </div>
                        </div>
                        <div className="py-2 flex">
                            <div className="mr-5">
                                <span className="font-bold mr-2">Postal Code :</span>
                                <span>{elem.postalCode}</span>
                            </div>
                            <div className="">
                                <span className="font-bold mr-2">Contact Number :</span>
                                <span>{elem.phoneNumber}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 text-2xl flex">
                        <BiEditAlt className="mr-10 opacity-50" />
                        <MdDeleteOutline className="cursor-pointer" onClick={() => clickDelShippingAddress(elem.id)} />
                    </div>
                </div>
            ))}

            <div className="mt-10 flex flex-row justify-between items-center border-b border-gray-300">
                <h1 className="font-medium text-lg my-3">New Shipping Address</h1>
                <button
                    className="px-3 rounded-xl h-8 bg-prigreen hover:bg-green-900 text-white"
                    onClick={clickAddShippingAddress}
                >
                    Add
                </button>
            </div>
            <div className="my-3 mt-10 px-5 w-full">
                <label htmlFor="recipient" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                    Recipient
                </label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    onChange={changeValueInput}
                    value={shippingAddress.recipient}
                    required
                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                    placeholder="John ChowRai"
                />
                {err.recipient && <p className="text-xs pt-2 text-red-700">{err.recipient}</p>}
            </div>
            <div className="my-3 px-5 w-full">
                <label htmlFor="address" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={changeValueInput}
                    value={shippingAddress.address}
                    required
                    className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                    placeholder="123/123 ABC Rd."
                />
                {err.address && <p className="text-xs pt-2 text-red-700">{err.address}</p>}
            </div>
            <div className="my-3 flex flex-row px-5 w-full">
                <div className="mr-2 w-1/2">
                    <label htmlFor="province" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                        Province
                    </label>
                    <input
                        type="text"
                        id="province"
                        name="province"
                        onChange={changeValueInput}
                        value={shippingAddress.province}
                        required
                        className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        placeholder="Bangkok"
                    />
                    {err.province && <p className="text-xs pt-2 text-red-700">{err.province}</p>}
                </div>
                <div className="ml-2 w-1/2">
                    <label htmlFor="country" className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        onChange={changeValueInput}
                        value={shippingAddress.country}
                        required
                        className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        placeholder="Vietnam"
                    />
                    {err.country && <p className="text-xs pt-2 text-red-700">{err.country}</p>}
                </div>
            </div>
            <div className="my-3 flex flex-row px-5 w-full">
                <div className="mr-2 w-1/2">
                    <label htmlFor="postalCode" className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                        Postal Code
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        onChange={changeValueInput}
                        value={shippingAddress.postalCode}
                        required
                        className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        placeholder="50000"
                    />
                    {err.postalCode && <p className="text-xs pt-2 text-red-700">{err.postalCode}</p>}
                </div>
                <div className="ml-2 w-1/2">
                    <label htmlFor="phoneNumber" className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={changeValueInput}
                        value={shippingAddress.phoneNumber}
                        required
                        className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        placeholder="+66 9876 5432 12"
                    />
                    {err.phoneNumber && <p className="text-xs pt-2 text-red-700">{err.phoneNumber}</p>}
                </div>
            </div>

            <div className="flex items-center my-10">
                <h1 className="mx-3 text-xs">
                    Noted : This shipping info will be shown on checkout detail while you're pledging each projects.
                </h1>
            </div>
        </div>
    );
}

export default Preference;
