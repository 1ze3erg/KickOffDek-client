import { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useParams } from "react-router";
import ShippingOptionItem from "./ShippingOptionItem";
import axios from "../../../config/axios";

function ModalShippingOption({ setShowModal }) {
    const { rewardId } = useParams();
    console.log(rewardId);
    const [shippingType, setShippingType] = useState("shipping1");
    const [shippingOptionArr, setShippingOptionArr] = useState([]);

    useEffect(() => {
        axios
            .get(`/shippings/get-by-reward-id/${rewardId}`)
            .then((res) => {
                setShippingOptionArr(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [rewardId]);

    useEffect(() => {
        if (shippingOptionArr[0]) {
            setShippingType("shipping3");
        }
    }, [shippingOptionArr]);

    const clickAddShippingOption = async () => {
        try {
            const res = await axios.post("/shippings/create", { name: "Shipping", fee: "0", rewardId: +rewardId });
            setShippingOptionArr((currentState) => [...currentState, res.data]);
        } catch (err) {
            console.dir(err);
        }
    };

    const clickDelShippingOption = async (id, idx) => {
        try {
            if (window.confirm("Delete Shipping Option?")) {
                setShippingOptionArr((currentState) => {
                    const clone = [...currentState];
                    clone.splice(idx, 1);
                    return clone;
                });
                await axios.delete(`/shippings/delete/${id}`);
            }
        } catch (err) {
            console.dir(err);
        }
    };

    const clickSaveShippingOption = () => {
        shippingOptionArr.forEach(async (elem) => {
            try {
                await axios.put(`/shippings/update/${elem.id}`, { ...elem, rewardId: +rewardId });
            } catch (err) {
                console.dir(err);
            }
        });
        alert("save option");
    };

    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div
                    className="absolute backdrop-filter backdrop-blur-lg inset-0 z-0"
                    onClick={() => setShowModal(false)}
                ></div>
                <div className="w-150 h-120 p-2 relative mx-auto my-auto rounded-xl shadow-lg bg-white overflow-y-auto">
                    <div className=" p-3 itmes-center">
                        <HiOutlineX
                            className="text-gray-900 absolute right-7 hover:text-red-800 cursor-pointer"
                            onClick={() => {
                                setShowModal(false);
                            }}
                        />
                        <h2 className="text-2xl py-4 text-gray-900 ">Shipping Options</h2>
                        <h2 className="text-2xl py-4 text-gray-900 ">
                            Set shipping fee and destination to collect delivery address.
                        </h2>
                        <div className="flex flex-col my-2">
                            <fieldset className="">
                                <legend className="sr-only">Shipping Options</legend>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="shipping1"
                                        type="radio"
                                        name="shipping"
                                        value="shipping1"
                                        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                        aria-labelledby="shipping1"
                                        aria-describedby="shipping1"
                                        checked={shippingType === "shipping1"}
                                        onChange={() => setShippingType("shipping1")}
                                    />
                                    <label htmlFor="shipping1" className="text-sm font-medium text-gray-900 ml-2 block">
                                        No Shipping Required
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="shipping2"
                                        type="radio"
                                        name="shipping"
                                        value="shipping2"
                                        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                        aria-labelledby="shipping2"
                                        aria-describedby="shipping2"
                                        checked={shippingType === "shipping2"}
                                        onChange={() => setShippingType("shipping2")}
                                    />
                                    <label htmlFor="shipping2" className="text-sm font-medium text-gray-900 ml-2 block">
                                        Offer Free Shipping
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="shipping3"
                                        type="radio"
                                        name="shipping"
                                        value="shipping3"
                                        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                        aria-labelledby="shipping3"
                                        aria-describedby="shipping3"
                                        checked={shippingType === "shipping3"}
                                        onChange={() => setShippingType("shipping3")}
                                    />
                                    <label htmlFor="shipping3" className="text-sm font-medium text-gray-900 ml-2 block">
                                        Collect Extra Shipping Fees
                                    </label>
                                </div>
                            </fieldset>
                            {shippingType === "shipping2" && <div className="mx-auto">Free Shipping</div>}
                            {shippingType === "shipping3" && (
                                <div className="mx-auto mb-5">
                                    <button
                                        className="bg-priteal hover:bg-gray-200 text-black py-2 px-10 rounded-md"
                                        onClick={clickAddShippingOption}
                                    >
                                        + Add Shipping Options
                                    </button>
                                </div>
                            )}
                            {/* Additional Shipping Option */}
                            {shippingType === "shipping3" &&
                                shippingOptionArr.map((elem, idx) => (
                                    <ShippingOptionItem
                                        key={idx}
                                        shippingOption={elem}
                                        idx={idx}
                                        setShippingOptionArr={setShippingOptionArr}
                                        clickDelShippingOption={clickDelShippingOption}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="bg-prigreen hover:bg-pridark text-white text-lg rounded-md py-2 px-12"
                            onClick={clickSaveShippingOption}
                        >
                            Save
                        </button>
                    </div>
                    <div className="p-3 mt-2 text-center space-x-4 md:block">
                        <p className="text-sm text-green-700">
                            By registering with an account, you agree to the T&Cs and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalShippingOption;
