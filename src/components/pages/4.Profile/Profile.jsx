import { useState } from "react";
import ProfileEditor from "./ProfileEditor";
import ProfilePage from "./ProfilePage";

function Profile() {
    const [showProfile, setShowProfile] = useState(true);
    const [showEditor, setShowEditor] = useState(false);

    return (
        <div className="bg-gray-100">
            {showProfile && <ProfilePage />}
            {showEditor && <ProfileEditor setShowProfile={setShowProfile} setShowEditor={setShowEditor} />}
            <div className="w-full flex justify-center py-3">
                <button
                    className="rounded-xl text-white bg-priorange hover:bg-red-500 px-12 py-3 text-md font-semibold mx-3"
                    onClick={() => {
                        setShowProfile(true);
                        setShowEditor(false);
                    }}
                >
                    Preview
                </button>
                <button
                    onClick={() => {
                        setShowProfile(false);
                        setShowEditor(true);
                    }}
                    className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-3 text-md font-semibold mx-3"
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default Profile;
