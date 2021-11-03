import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

function ModalShippingOption({ setShowModal }) {
    const [shippingType, setShippingType] = useState("shipping1");
    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div className="absolute backdrop-filter backdrop-blur-lg inset-0 z-0"></div>
                <div className="w-150  p-3 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
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
                        <div className="flex flex-col my-5 ">
                            <fieldset className="mb-5">
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
                                        onChange={() => setShippingType("shipping3")}
                                    />
                                    <label htmlFor="shipping3" className="text-sm font-medium text-gray-900 ml-2 block">
                                        Collect Extra Shipping Fees
                                    </label>
                                </div>
                            </fieldset>
                            {shippingType === "shipping2" && <div>Free Shipping</div>}
                            {shippingType === "shipping3" && <button className="">+ Add Shipping Options</button>}
                            {/* Additional Shipping Option */}
                            {/* {shippingType === "shipping3" &&
                                shippingOptionArr.map((elem, index) => {
                                    return (
                                        <div className="border border-gray-300 rounded-lg p-1">
                                            <div className="flex flex-row justify-between">
                                                <h1>Option {index + 1}</h1>
                                                <button>Delete</button>
                                            </div>
                                            <div className="flex flex-row justify-between w-full">
                                                <div className="flex flex-col w-2/3">
                                                    <label
                                                        htmlFor="username"
                                                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                                                    >
                                                        Username
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        required
                                                        className="border mr-3 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                                        placeholder="@example"
                                                    />
                                                </div>
                                                <div className="flex flex-col w-1/3">
                                                    <label
                                                        htmlFor="username"
                                                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                                                    >
                                                        For an extra
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        required
                                                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                                        placeholder="@example"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })} */}
                        </div>
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
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
