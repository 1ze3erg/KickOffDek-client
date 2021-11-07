import { HiOutlineX } from "react-icons/hi";

function ModalAvatar({ closeModal, avatar, username, biography }) {
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
                    <div className="flex items-center justify-center">
                        <img src={avatar} className="h-16 w-16 rounded-full bg-gray-300" alt="avatar" />
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <p className="text-sm text-green-700">{username}</p>
                        <p className="text-sm text-green-700">{biography}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAvatar;
