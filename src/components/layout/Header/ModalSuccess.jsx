import { HiOutlineX } from "react-icons/hi";

function ModalSuccess({ setShowSuccess, checkedEmail }) {
    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div
                    className="absolute backdrop-filter backdrop-blur-lg inset-0 z-0"
                    onClick={() => setShowSuccess(false)}
                ></div>
                <div className="w-96 p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
                    <div className="text-center p-3 flex-auto justify-center">
                        <HiOutlineX
                            className="text-gray-900 absolute right-7 hover:text-red-800 cursor-pointer"
                            onClick={() => setShowSuccess(false)}
                        />
                        <h2 className="text-2xl pt-10 pb-3 text-gray-900 ">{checkedEmail} has been created</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalSuccess;
