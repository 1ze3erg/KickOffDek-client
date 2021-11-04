function Preference(setShippingInfo) {
  const changeValueInput = (e) => {
    setShippingInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div className="w-3/4 ml-10 mt-12">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-medium">Preference</h1>
          
        </div>

        <div className="mt-10 flex flex-row justify-between border-b border-gray-300">
          <h1 className="font-medium text-lg my-3">Emails</h1>
          <button className="px-2 rounded-xl h-8 bg-prigreen text-white">
            Save
          </button>
        </div>
        <div className="mt-10 px-5 border-b border-gray-300 pb-10">
        <input
            type="text"
            id="email"
            name="email"
            value="email"
            required
            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="John ChowRai"
          />
          <h1 className="mt-2">
            This crowdfunding passport is registered through KickOffDek.
          </h1>
        </div>
        <div className="mt-10 flex flex-row justify-between border-b border-gray-300">
          <h1 className="font-medium text-lg my-3">My Shipping Address</h1>
          <button className="px-2 rounded-xl h-8 bg-prigreen text-white">
            Save
          </button>
        </div>
        
        

        <div className="my-3 mt-10 px-5 w-full">
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
          <p className="text-xs pt-2 text-red-700">Input your recipient!</p>
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
          <p className="text-xs pt-2 text-red-700">Input your address!</p>
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
            <p className="text-xs pt-2 text-red-700">Input province!</p>
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
            <p className="text-xs pt-2 text-red-700">Input country!</p>
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
            <p className="text-xs pt-2 text-red-700">Input postal code!</p>
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
            <p className="text-xs pt-2 text-red-700">
              Input your phone number!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <h1 className="mx-3 text-xs">
          Noted : This shipping info will be shown on checkout detail while you're pledging each projects.
        </h1>
      </div>
    </>
  );
}

export default Preference;
