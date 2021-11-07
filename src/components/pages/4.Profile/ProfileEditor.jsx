import { useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { GiCheckMark } from "react-icons/gi";
import EditFirstStep from "./EditFirstStep";
import EditSecondStep from "./EditSecondStep";
import EditThirdStep from "./EditThirdStep";

function ProfileEditor({ setShowProfile, setShowEditor }) {
    const { user } = useAppContext();
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <div className="container mx-auto flex flex-col py-5 md:my-6">
            {/* Edit Step 1 */}
            <div className="my-1 flex-col">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center">
                            {show1 ? 1 : <GiCheckMark />}
                        </h1>
                        <h1 className="mx-3">Intro</h1>
                    </div>
                    <div>
                        {!show1 && (
                            <button
                                onClick={() => {
                                    setShow1(true);
                                    setShow2(false);
                                    setShow3(false);
                                }}
                                className="text-green-800"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
                {show1 && (
                    <div>
                        <EditFirstStep
                            user={user}
                            setShowProfile={setShowProfile}
                            setShowEditor={setShowEditor}
                            setShow1={setShow1}
                            setShow2={setShow2}
                        />
                    </div>
                )}
                <div className="w-full bg-gray-300 h-px my-3"></div>
            </div>
            {/* Edit Step 2 */}
            <div className="my-1 flex-col">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center">
                        <h1
                            className={`flex rounded-full h-8 w-8 bg-prigreen ${
                                show1 && "opacity-50"
                            } text-white items-center justify-center`}
                        >
                            {show1 || show2 ? 2 : <GiCheckMark />}
                        </h1>
                        <h1 className="mx-3">Bio</h1>
                    </div>
                    <div>
                        {!show2 && (
                            <button
                                onClick={() => {
                                    setShow1(false);
                                    setShow2(true);
                                    setShow3(false);
                                }}
                                className="text-green-800"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
                {show2 && (
                    <div>
                        <EditSecondStep user={user} setShow1={setShow1} setShow2={setShow2} setShow3={setShow3} />
                    </div>
                )}
                <div className="w-full bg-gray-300 h-px my-3"></div>
            </div>
            {/* Edit Step 3 */}
            <div className="my-1 flex-col">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center">
                        <h1
                            className={`flex rounded-full h-8 w-8 bg-prigreen ${
                                (show1 || show2) && "opacity-50"
                            } text-white items-center justify-center`}
                        >
                            {show1 || show2 || show3 ? 3 : <GiCheckMark />}
                        </h1>
                        <h1 className="mx-3">Social</h1>
                    </div>
                    <div>
                        {!show3 && (
                            <button
                                onClick={() => {
                                    setShow1(false);
                                    setShow2(false);
                                    setShow3(true);
                                }}
                                className="text-green-800"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
                {show3 && (
                    <div>
                        <EditThirdStep
                            user={user}
                            setShow2={setShow2}
                            setShow3={setShow3}
                            setShowProfile={setShowProfile}
                            setShowEditor={setShowEditor}
                        />
                    </div>
                )}
                <div className="w-full bg-gray-300 h-px my-3"></div>
            </div>
        </div>
    );
}

export default ProfileEditor;
