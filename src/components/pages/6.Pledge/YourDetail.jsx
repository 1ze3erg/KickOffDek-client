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

                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                setShow1(true);
                                setShow2(false);
                            }}
                            className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setShow2(false);
                                setShow3(true);
                            }}
                            className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
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
