import { Link } from "react-router-dom";

function CreateProjectSuccess() {
    return (
        <div className="w-10/12 mx-auto flex justify-center">
            <div className="flex flex-col items-center">
                <img src="https://picsum.photos/400/300" alt="" className="my-5" />
                <h1>Project created!</h1>
                <h1 className="mb-10">
                    There are only few things left like adding your payment details and setting up your rewards. Would
                    you like to do it now?
                </h1>
                <div className="flex flex-col items-stretch p-2">
                    <Link to="/edit-project/1">
                        <button className="w-full border border-gray-500 py-3 px-4 rounded-lg bg-purple-600 text-white mb-5">
                            Go to Project Editor
                        </button>
                    </Link>
                    <Link to="/dashboard">
                        <button className="w-full py-3 px-4 hover:bg-gray-200 rounded-lg mb-5">
                            Save draft and do it later
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectSuccess;
