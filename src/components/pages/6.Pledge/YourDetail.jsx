import { useAppContext } from "../../../contexts/AppContext";
import { GiCheckMark } from "react-icons/gi";
import ValidateUser from "./YourDetail-subComps/ValidateUser";

function YourDetail({ show1, show2, setShow1, setShow2, setShow3 }) {
    const { user } = useAppContext();
    const { avatar, username } = user;

    return (
        <div className="my-1">
            <div className="flex flex-row items-center">
                <h1 className={`flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center ${show1 && "opacity-50"}`}>
                    {show1 || show2 ? 2 : <GiCheckMark />}
                </h1>
                <h1 className="mx-3 font-semibold">Your Detail</h1>
                <h1 className="text-sm">{username}</h1>
            </div>
            {show2 && (
                <>
                    <ValidateUser avatar={avatar} username={username} />
                    {/* Button Veryfy */}

                    <div className="flex items-center justify-center mt-10">
                        <button
                            onClick={() => {
                                setShow1(true);
                                setShow2(false);
                            }}
                            className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setShow2(false);
                                setShow3(true);
                            }}
                            className="rounded-xl text-white bg-priorange hover:bg-red-500 px-5 py-2 text-md font-semibold mx-3"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
            <div className="w-full bg-gray-300 h-px my-3"></div>
        </div>
    );
}

export default YourDetail;
