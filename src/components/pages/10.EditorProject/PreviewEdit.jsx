import { HiDeviceMobile, HiOutlineShare } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";

function PreviewEdit() {
    return (
        <div className="col-span-9 flex flex-col w-full pr-3 pb-3">
            <div className="flex justify-end mx-3 my-5">
                <div className="flex flex-row mx-3 items-center">
                    <HiDeviceMobile />
                    <button className="mx-2">Mobile View</button>
                </div>
                <div className="flex flex-row mx-3 items-center">
                    <FaExternalLinkAlt />
                    <button className="mx-2">Fullscreen View</button>
                </div>
            </div>
            <div
                className="bg-scroll h-full flex flex-row rounded-lg"
                style={{
                    backgroundImage: `url(${"https://picsum.photos/1920/1080"})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex w-full justify-around items-center text-prilight">
                    <div>
                        {/* <h1 className="text-7xl font-bold py-2">{username || "Organization"}</h1>
                        <h1 className="text-3xl font-bold py-2">{tagline || "Tagline"}</h1>
                        <span className="text-xl py-2">
                            {province || "Province"}, {country || "Country"}
                        </span> */}
                        <p className="text-xl py-2">Category</p>
                        <div className="flex flex-row py-2 my-5">
                            <button className="inline-flex bg-purple-600 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                                <HiOutlineShare />
                                <span className="px-1">Share</span>
                            </button>

                            <button className="inline-flex bg-clear mx-3 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                                <HiOutlineShare />
                                <span className="px-1">About</span>
                            </button>
                        </div>
                        <div className="flex flex-row  my-3">
                            <FaFacebookSquare className="mx-2 text-2xl cursor-pointer" />
                            <FaInstagram className="mx-2 text-2xl cursor-pointer" />
                            <FaTwitter className="mx-2 text-2xl cursor-pointer" />
                            <FaExternalLinkAlt className="mx-2 text-2xl cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-64 cursor-pointer m-auto mx-3">
                            <div className="w-full block h-full">
                                <img
                                    className="h-56 w-full object-cover"
                                    alt=""
                                    src={"https://picsum.photos/1920/1080"}
                                />
                                <div className="bg-white w-full p-4 flex flex-col pt-5">
                                    {/* <h1 className="text-2xl font-bold mb-2 text-pridark">{title || "My Campaign"}</h1> */}
                                    <div className="w-full h-4 bg-prilight rounded-full">
                                        <div className="w-2/3 h-full text-center text-xs text-white bg-priorange rounded-full"></div>
                                    </div>
                                    <div className="flex flex-start justify-between pt-8">
                                        {/* <p className="text-pridark text-2xl">{formatMoney(0, currency)}</p>
                                        <p className="text-pridark text-2xl">{calDiffDay(endDate) || 0}</p> */}
                                    </div>
                                    <div className="flex flex-start justify-between mb-4">
                                        {/* <p className="text-priorange text-md">
                                            of {formatMoney(+target, currency) || 0} target
                                        </p> */}
                                        <p className="text-pridark text-md">days left</p>
                                    </div>
                                    <button className="w=full bg-pridark transition-colors duration-700 text-white h-12 rounded-xl hover:bg-gray-500">
                                        Pledge Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewEdit;
