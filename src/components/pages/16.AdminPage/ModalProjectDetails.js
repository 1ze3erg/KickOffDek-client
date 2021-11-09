import { HiOutlineX } from "react-icons/hi";
import { formatMoney } from "../../../helpers/format";

function ModalProjectDetails({ closeModal, pledgeInfo }) {
    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div
                    className="absolute backdrop-filter backdrop-blur-lg inset-0 z-0"
                    onClick={() => closeModal(false)}
                ></div>
                <div className="w-150 p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
                    <HiOutlineX
                        className="text-gray-900 absolute right-7 hover:text-red-800 cursor-pointer"
                        onClick={() => closeModal(false)}
                    />
                    <div className="flex items-center justify-center"></div>
                    <div className="p-3 mt-2 space-x-4 md:block">
                        <p className="text-xl text-green-700">Your Pledge Details</p>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="cols-span-1">Recipient :</div>
                            <div className="cols-span-4">{pledgeInfo}</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Pledge Date:</div>
                            <div className="col-span-4">{pledgeInfo}</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Project :</div>
                            <div className="col-span-4">{pledgeInfo}</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Reward :</div>
                            <div className="col-span-4">{pledgeInfo}</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Quantity :</div>
                            <div className="col-span-4">{pledgeInfo}</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Est ship:</div>
                            <div className="col-span-4">{pledgeInfo} {pledgeInfo}</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Total :</div>
                            <div className="col-span-4">
                                {formatMoney(pledgeInfo)}
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5">
                            <div className="col-span-1">Pay by :</div>
                            <div className="col-span-4">
                                <span>Card Number {pledgeInfo} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalProjectDetails;