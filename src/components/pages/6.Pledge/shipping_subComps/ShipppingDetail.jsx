import React from "react";

function ShipppingDetail({ setShippingInfo }) {
  const changeValueInput = (e) => {
    setShippingInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div className="flex items-center justify-center my-3">
        <h1 className="text-2xl font-medium">Enter Shipping details</h1>
      </div>

      <div className="flex flex-col mx-auto items-center shadow-lg w-144 ">
        <div className="my-3 px-5 w-full">
          <label
            htmlFor="recipient"
            className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Recipient
          </label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            onChange={changeValueInput}
            required
            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="John ChowRai"
          />
          {/* <p className="text-xs pt-2 text-red-700">Input your recipient!</p> */}
        </div>
        <div className="my-3 px-5 w-full">
          <label
            htmlFor="address"
            className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={changeValueInput}
            required
            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="123/123 ABC Rd."
          />
          {/* <p className="text-xs pt-2 text-red-700">Input your address!</p> */}
        </div>
        <div className="my-3 flex flex-row px-5 w-full">
          <div className="mr-2 w-1/2">
            <label
              htmlFor="province"
              className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Province
            </label>
            <input
              type="text"
              id="province"
              name="province"
              onChange={changeValueInput}
              required
              className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Bangkok"
            />
            {/* <p className="text-xs pt-2 text-red-700">Input province!</p> */}
          </div>
          <div className="ml-2 w-1/2">
            <label
              htmlFor="country"
              className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              onChange={changeValueInput}
              required
              className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Vietnam"
            />
            {/* <p className="text-xs pt-2 text-red-700">Input country!</p> */}
          </div>
        </div>
        <div className="my-3 flex flex-row px-5 w-full">
          <div className="mr-2 w-1/2">
            <label
              htmlFor="postalCode"
              className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Postal Code
            </label>
            <input
              type="number"
              id="postalCode"
              name="postalCode"
              onChange={changeValueInput}
              required
              className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="50000"
            />
            {/* <p className="text-xs pt-2 text-red-700">Input postal code!</p> */}
          </div>
          <div className="ml-2 w-1/2">
            <label
              htmlFor="phoneNumber"
              className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100"
            >
              Contact Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              onChange={changeValueInput}
              required
              className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="+66 9876 5432 12"
            />
            {/* <p className="text-xs pt-2 text-red-700">
              Input your phone number!
            </p> */}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 mb-10">
        <h1 className="mx-3 text-xs">
          Shipping status will be provided thorugh your email once the creator
          started ship your rewards.
        </h1>
      </div>
    </>
  );
}

export default ShipppingDetail;
