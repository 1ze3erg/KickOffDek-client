import ProfileEditor from "./ProfileEditor";
import ProfilePage from "./ProfilePage";
import React, { useState } from "react";

function Profile() {
  const [showProfile, setShowProfile] = useState(true);
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="mb-20">
      {showProfile && <ProfilePage />}
      {showEditor && <ProfileEditor />}
      <div className="w-full flex justify-center sm:mt-10 mt-5 ">
        <button
          onClick={() => {
            setShowProfile(false);
            setShowEditor(true);
          }}
          className="rounded-xl text-white bg-prigreen hover:bg-green-800 w-20 h-10 text-md font-semibold mx-3"
        >
          Edit
        </button>

        <button
          className="rounded-xl text-white bg-priorange hover:bg-red-500 w-48 h-10 text-md font-semibold mx-3"
          onClick={() => {
            setShowProfile(true);
            setShowEditor(false);
          }}
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default Profile;
