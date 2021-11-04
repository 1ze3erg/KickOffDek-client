import React, { useState, useEffect } from "react";
import EditFirstStep from "./EditFirstStep";
import EditSecondStep from "./EditSecondStep";
import EditThirdStep from "./EditThirdStep";
import axios from "../../../config/axios";

function ProfileEditor() {
  const [userInfo, setUserInfo] = useState({});
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    axios
      .get(`/users/get-user`)
      .then((res) => {
        setUserInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  console.log("userInfo", userInfo);

  return (
    <div className="container mx-auto flex flex-col my-3 md:my-6">
      {/* Edit Step 1 */}

      <div className="my-1 flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center">
              1
            </h1>
            <h1 className="mx-3">Intro</h1>
          </div>
          <div>
            <button onClick={()=> {setShow1(true); setShow2(false); setShow3(false)}} className="text-green-800">Edit</button>
          </div>
        </div>
        {show1 && (
          <div>
            <EditFirstStep
              userInfo={userInfo}
              username={userInfo.username}
              firstName={userInfo.firstName}
              lastName={userInfo.lastName}
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
            <h1 className="flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center">
              2
            </h1>
            <h1 className="mx-3">Bio</h1>
          </div>
          <div>
            <button onClick={()=> {setShow1(false); setShow2(true); setShow3(false)}} className="text-green-800">Edit</button>
          </div>
        </div>
        {show2 && (
          <div>
            <EditSecondStep
              userInfo={userInfo}
              biography={userInfo.biography}
              tagline={userInfo.tagline}
              province={userInfo.province}
              country={userInfo.country}
              phoneNumber={userInfo.phoneNumber}
              setShow1={setShow1}
              setShow2={setShow2}
              setShow3={setShow3}
            />
          </div>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      {/* Edit Step 3 */}
      <div className="my-1 flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="flex rounded-full h-8 w-8 bg-prigreen text-white items-center justify-center">
              3
            </h1>
            <h1 className="mx-3">Social</h1>
          </div>
          <div>
            <button onClick={()=> {setShow1(false); setShow2(false); setShow3(true)}} className="text-green-800">Edit</button>
          </div>
        </div>
        {show3 && (
          <div>
            <EditThirdStep
              userInfo={userInfo}
              facebook={userInfo.facebook}
              instagram={userInfo.instagram}
              twitter={userInfo.twitter}
              website={userInfo.website}
              
              setShow2={setShow2}
              setShow3={setShow3}
            />
          </div>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
    </div>
  );
}

export default ProfileEditor;
