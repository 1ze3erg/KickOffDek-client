import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "../../../../config/axios";

function PaymentDetail({ setPayment, pledgeCreated, setPledgeCreated }) {
    const [creditCard, setCreditCard] = useState([]);
    const [newCard, setNewCard] = useState({
        cardProvider: "VISA",
        cardNumber: "",
        cardHolderName: "",
        expiration: "",
    });
    const [err, setErr] = useState({ cardProvider: "", cardNumber: "", cardHolderName: "", expiration: "" });
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    useEffect(() => {
        try {
            const fetchCreditCard = async () => {
                const res = await axios.get(`/payments/get-by-user-id`);
                setCreditCard(res.data);
            };
            fetchCreditCard();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setNewCard((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} is required` }));
        } else if (e.target.name === "cardNumber" && e.target.value.length !== 16) {
            setNewCard((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: `${e.target.name} must have 16 character` }));
        } else {
            setNewCard((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr((currentState) => ({ ...currentState, [e.target.name]: "" }));
        }
    };

    const clickAddPayment = async () => {
        try {
            const res = await axios.post("/payments/create", {
                ...newCard,
                expiration: newCard.expiration.split("-").reverse().join(""),
            });
            setCreditCard((currentState) => [...currentState, res.data]);
            alert("Payment has been created");
            setShowPaymentForm(false);
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center my-5">
                <h1 className="text-2xl font-medium">Use your registered credit card</h1>
            </div>
            <div className="grid grid-cols-3 mb-10">
                {creditCard ? (
                    creditCard.map((item) => {
                        return (
                            <div
                                className={`shadow-lg rounded-lg w-72 h-48 px-12 py-5 mb-5 ${
                                    pledgeCreated.paymentId === item.id ? "bg-prilight" : ""
                                }`}
                                key={item.id}
                            >
                                <h1 className="mb-2 font-semibold text-xl">{item.cardProvider}</h1>
                                <h1 className="mb-5 flex flex-col">
                                    <span className="font-semibold">Card number :</span>
                                    <span>
                                        **** **** ****&nbsp;
                                        {item.cardNumber.substring(item.cardNumber.length - 4, item.cardNumber.length)}
                                    </span>
                                </h1>
                                <button
                                    className="bg-prigreen hover:bg-pridark px-5 py-2 rounded-lg text-white w-full"
                                    onClick={() => {
                                        setPayment(item);
                                        setPledgeCreated((currentState) => ({ ...currentState, paymentId: item.id }));
                                    }}
                                >
                                    Use this card
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div className="shadow-lg p-5">
                        <h1>You have not register your credit card!</h1>
                    </div>
                )}
                <div
                    className="shadow-lg rounded-lg w-72 h-48 px-12 py-3 cursor-pointer hover:bg-prilight flex justify-center items-center"
                    onClick={() => setShowPaymentForm((currentState) => !currentState)}
                >
                    <AiOutlinePlus className="text-3xl" />
                </div>
            </div>

            {showPaymentForm && (
                <>
                    <div className="flex items-center justify-center my-5">
                        <h1 className="text-2xl font-medium">Or enter new payment method details</h1>
                    </div>
                    <div className="flex flex-col mx-auto items-center shadow-lg w-96 p-5">
                        <div className="w-full mb-5">
                            <label
                                htmlFor="cardProvider"
                                className="pb-2  text-sm font-medium text-gray-800 dark:text-gray-100"
                            >
                                Card Provider
                            </label>
                            <select
                                className="border w-full border-gray-300 dark:border-gray-700 px-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-rpidark dark:text-gray-400"
                                name="cardProvider"
                                id="cardProvider"
                                value={newCard.cardProvider}
                                onChange={handleChangeInput}
                            >
                                <option value="VISA">Visa</option>
                                <option value="MASTER">Master card</option>
                            </select>
                        </div>
                        <div className="w-full mb-5">
                            <label
                                htmlFor="cardNumber"
                                className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                            >
                                Card Number
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 px-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                placeholder="1234 5678 9000 0000"
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                maxLength="16"
                                value={newCard.cardNumber}
                                onChange={handleChangeInput}
                            />
                            {err.cardNumber && <p className="text-xs pt-2 text-red-700">{err.cardNumber}</p>}
                        </div>
                        <div className="w-full mb-5">
                            <label
                                htmlFor="expiration"
                                className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                            >
                                Expiry
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 px-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="month"
                                id="expiration"
                                name="expiration"
                                value={newCard.expiration}
                                onChange={handleChangeInput}
                            />
                            {err.expiration && <p className="text-xs pt-2 text-red-700">{err.expiration}</p>}
                        </div>
                        <div className="w-full mb-5">
                            <label
                                htmlFor="holderName"
                                className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                            >
                                Card Holder Name
                            </label>
                            <input
                                className="border w-full border-gray-300 dark:border-gray-700 px-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-pridark dark:text-gray-400"
                                type="text"
                                id="cardHolderName"
                                name="cardHolderName"
                                placeholder="Simon De La Rey"
                                value={newCard.cardHolderName}
                                onChange={handleChangeInput}
                            />
                            {err.cardHolderName && <p className="text-xs pt-2 text-red-700">{err.cardHolderName}</p>}
                        </div>
                        <div className="w-full">
                            <button
                                className="bg-prigreen hover:bg-pridark text-white text-base px-5 py-3 w-full rounded"
                                onClick={clickAddPayment}
                            >
                                Add Payment
                            </button>
                        </div>
                    </div>
                </>
            )}

            <div className="flex items-center mt-10">
                <h1 className="mx-3 text-xs">
                    Your payment information is processed through Braintree. To complete transactions, we store the card
                    type, last four digits, expiration, and name on the card for display purposes. By pledging you agree
                    to Pozible's T&Cs and Privacy Policy.
                </h1>
            </div>
        </>
    );
}

export default PaymentDetail;
