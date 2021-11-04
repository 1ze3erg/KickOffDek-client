import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "../../../config/axios";

function CreateProfileDetail({ setShowCampaignDetail, setShowProfileDetail, setShowProjectVisual, input, setInput }) {
    const { categoryId, organization, tagline, province, country, about, facebook, instagram, twitter, website } =
        input;
    const [categories, setCategories] = useState([]);
    const [err, setErr] = useState({ organization: "" });

    useEffect(() => {
        axios
            .get("/categories/get-all")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const handleChangeInput = (e) => {
        if (e.target.name === "organization" && e.target.value.trim() === "") {
            setInput((currentState) => ({ ...currentState, [e.target.name]: "" }));
            setErr(currentState => ({ ...currentState, organization: "organization is required" }))
        } else if (e.target.name == "categoryId") {
            setInput((currentState) => ({
                ...currentState,
                category: categories.find((elem) => elem.id === +e.target.value)?.name,
                [e.target.name]: e.target.value,
            }));
        } else {
            setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
            setErr(currentState => ({ ...currentState, [e.target.name]: "" }))
        }
    };

    const buttonNextDisabled = !categoryId || !organization;

    return (
        <div className="col-span-3 flex flex-col justify-start py-5 px-3">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <HiArrowNarrowLeft
                        className="text-2xl mr-2 cursor-pointer"
                        onClick={() => {
                            setShowCampaignDetail(true);
                            setShowProfileDetail(false);
                        }}
                    />
                    <h1 className="text-xl font-bold">Profile Details</h1>
                </div>
                <button
                    className={`py-1 px-4 border border-gray-700 rounded-xl bg-prigreen text-white ${
                        buttonNextDisabled ? "opacity-50" : "opacity-100"
                    }`}
                    onClick={() => {
                        setShowProfileDetail(false);
                        setShowProjectVisual(true);
                    }}
                    disabled={buttonNextDisabled}
                >
                    Next
                </button>
            </div>
            <div className="h-150 overflow-y-scroll pr-2">
                <div className="w-full mx-auto flex flex-col p-2">
                    <h1 className="mt-5 mb-7 font-bold text-lg">Overview</h1>
                    <div className="mb-5">
                        <label htmlFor="organization" className="text-sm">
                            Organization
                        </label>
                        <input
                            className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            name="organization"
                            id="organization"
                            placeholder="Organization"
                            value={organization}
                            onChange={handleChangeInput}
                        />
                        {err.organization && <p className="text-xs pt-2 text-red-700">{err.organization}</p>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="tagline" className="text-sm">
                            Tagline
                        </label>
                        <input
                            className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            name="tagline"
                            id="tagline"
                            placeholder="Tagline"
                            value={tagline}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="province" className="text-sm">
                            Province
                        </label>
                        <input
                            className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            name="province"
                            id="province"
                            placeholder="Province"
                            value={province}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="country" className="text-sm">
                            Country
                        </label>
                        <input
                            className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Country"
                            value={country}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="categoryId" className="text-sm">
                            Category
                        </label>
                        <select
                            className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="categoryId"
                            name="categoryId"
                            value={categoryId}
                            onChange={handleChangeInput}
                        >
                            {categories.map((elem) => (
                                <option key={elem.id} value={elem.id}>
                                    {elem.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="w-full mx-auto flex flex-col p-2">
                    <h1 className="mt-5 mb-7 font-bold text-lg">About</h1>
                    <div className="mb-5">
                        <textarea
                            className="mt-1 w-full py-4 px-3 text-gray-800 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            name="about"
                            id="about"
                            value={about}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="w-full mx-auto flex flex-col p-2">
                    <h1 className="mt-5 mb-7 font-bold text-lg">Social Links</h1>
                    <div className="mb-5">
                        <label htmlFor="facebook" className="text-sm">
                            Facebook
                        </label>
                        <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                            <div className="flex items-center pointer-events-none">
                                <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">
                                    facebook.com/
                                </span>
                            </div>
                            <input
                                className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                                type="text"
                                name="facebook"
                                id="facebook"
                                value={facebook}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="instagram" className="text-sm">
                            Instagram
                        </label>
                        <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                            <div className="flex items-center pointer-events-none">
                                <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">@</span>
                            </div>
                            <input
                                className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                                type="text"
                                name="instagram"
                                id="instagram"
                                value={instagram}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="twitter" className="text-sm">
                            Twitter
                        </label>
                        <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                            <div className=" flex items-center pointer-events-none">
                                <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">@</span>
                            </div>
                            <input
                                className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                                type="text"
                                name="twitter"
                                id="twitter"
                                value={twitter}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="website" className="text-sm">
                            Website
                        </label>
                        <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                            <div className="flex items-center pointer-events-none">
                                <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">http://</span>
                            </div>
                            <input
                                className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md bg-gray-100"
                                type="text"
                                name="website"
                                id="website"
                                value={website}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProfileDetail;
