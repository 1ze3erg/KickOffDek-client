import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function ShippingOptionItem({ shippingOption, idx, setShippingOptionArr, clickDelShippingOption }) {
    const [input, setInput] = useState({ name: shippingOption.name, fee: shippingOption.fee });
    const [err, setErr] = useState({ name: "", fee: "" });

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setInput((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.value} is required` }));
        } else {
            setShippingOptionArr((currentState) =>
                currentState.map((elem, index) => {
                    if (index === idx) {
                        return { ...elem, [e.target.name]: e.target.value };
                    } else {
                        return elem;
                    }
                })
            );
            setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    return (
        <div className="border border-black rounded-lg px-5 py-3 mb-5">
            <div className="flex flex-row justify-between items-center mb-2 text-lg">
                <h1 className="font-semibold">Option {idx + 1}</h1>
                <BsFillTrashFill
                    className="cursor-pointer"
                    onClick={() => clickDelShippingOption(shippingOption.id, idx)}
                />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-2/3">
                    <label htmlFor="name" className="pb-2 text-sm text-gray-800 dark:text-gray-100">
                        Name
                    </label>
                    <input
                        className="border mr-3 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={input.name}
                        onChange={handleChangeInput}
                    />
                    {err.name && <p className="text-xs pt-2 text-red-700">{err.name}</p>}
                </div>
                <div className="flex flex-col w-1/3">
                    <label htmlFor="fee" className="pb-2 text-sm text-gray-800 dark:text-gray-100">
                        Fee
                    </label>
                    <input
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                        type="text"
                        id="fee"
                        name="fee"
                        placeholder="Fee"
                        value={input.fee}
                        onChange={handleChangeInput}
                    />
                    {err.fee && <p className="text-xs pt-2 text-red-700">{err.fee}</p>}
                </div>
            </div>
        </div>
    );
}

export default ShippingOptionItem;
