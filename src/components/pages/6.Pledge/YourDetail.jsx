import ValidateUser from "./YourDetail-subComps/ValidateUser";
import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";

function YourDetail({ setShow1, setShow2, setShow3, Show2 }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await axios.get(`/users/get-user`);
        setUser(res.data);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { avatar, username } = user;

  return (
    <div className="my-1">
      <div className="flex flex-row items-center">
        <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
          2
        </h1>
        <h1 className="mx-3">Details</h1>
        <h1>{username}</h1>
      </div>
      {Show2 && (
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
