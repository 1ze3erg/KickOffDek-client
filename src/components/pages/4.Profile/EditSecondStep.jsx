import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

function EditSecondStep({
  biography,
  tagline,
  province,
  country,
  phoneNumber,
  userInfo,
  setShow1,
  setShow2,
  setShow3,
}) {
  const [userInfoChange, setUserInfoChange] = useState({
    province: "",
    country: "",
    phoneNumber: "",
  });
  useEffect(() => {
    setUserInfoChange({ biography, tagline, province, country, phoneNumber });
  }, [userInfo]);

  console.log("2nd step", userInfoChange);
  const clickNext = async (e) => {
    try {
      e.preventDefault();
      await axios
        .put(`/users/update-user`, {
          biography: userInfoChange.biography,
          tagline: userInfoChange.tagline,
          province: userInfoChange.province,
          country: userInfoChange.country,
          phoneNumber: userInfoChange.phoneNumber,
        })
        .then((res) => {
          console.log(res.data);
          setShow2(false);
          setShow3(true);
        });
    } catch (err) {
      console.dir(err);
    }
  };
  const clickBack = async (e) => {
    setShow2(false);
    setShow1(true);
  };
  const changeValueInput = (e) => {
    setUserInfoChange((cur) => ({ ...cur, [e.target.name]: e.target.value })); // { username: "dupree", firstName, lastName, username: "izeberg" } => { username: "izeberg", firstName, lastName}
  };
  return (
    <>
      <div className="flex flex-row my-2">
        <div className="w-1/2 ml-5">
          <div className="my-2 rounded items-center">
            <h1 className="text-sm my-3">Biography</h1>
            <textarea
              value={userInfoChange.biography}
              onChange={changeValueInput}
              className="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-96 h-20"
            ></textarea>
          </div>
          <div>
            <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Tagline</h1>
              <input
                type="text"
                placeholder="Placeholder"
                value={userInfoChange.tagline}
                onChange={changeValueInput}
                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
              <span className="h-full font-normal absolute text-center text-gray-800  text-base items-center justify-center w-8 top-11 right-0 pr-12 py-3">
                0/45
              </span>
            </div>
          </div>
          <div>
            <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Province</h1>
              <input
                type="text"
                name="province"
                placeholder="Province or City"
                value={userInfoChange.province}
                onChange={changeValueInput}
                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
          <div>
            <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Country</h1>
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={userInfoChange.country}
                onChange={changeValueInput}
                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <div className="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Contact Number</h1>
              <input
                type="number"
                name="phoneNumber"
                placeholder="+76 856 9875 625"
                value={userInfoChange.phoneNumber}
                onChange={changeValueInput}
                className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
          <div className="flex my-1 w-144 rounded flex-col mt-5">
            <label
              htmlFor="image"
              className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Profile Image
            </label>
            <div className="relative flex w-full flex-wrap items-stretch">
              <label className="w-80 h-80 flex flex-col items-center justify-center px-4 py-2 bg-white rounded-md shadow-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                <span className="mt-2 text-base leading-normal">
                  Select a file
                </span>
                <input type="file" className="hidden" id="coverPhoto" />
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center mx-5 ">
            <FiAlertCircle className="text-xs text-gray-400" />
            <span className="text-xs text-gray-400 px-2">
              Min. Width 200px & Min. Height 200px
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="rounded-xl text-white bg-prigreen hover:bg-green-800 w-16 h-10 text-md font-semibold mx-3"
          onClick={clickBack}
        >
          Back
        </button>
        <button
          className="rounded-xl text-white bg-priorange hover:bg-red-500 w-16 h-10 text-md font-semibold mx-3"
          onClick={clickNext}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default EditSecondStep;
