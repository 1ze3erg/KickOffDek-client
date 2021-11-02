import { HiDeviceMobile, HiOutlineShare } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";

function PreviewDesktopCreate() {
    const coverImage = "https://res.cloudinary.com/dt93jhdvk/image/upload/v1635492631/tzmazxfajhrltnu5d64l.jpg";
    const campaignImage = "https://res.cloudinary.com/dt93jhdvk/image/upload/v1635490045/o971jsraeawqana3pgtc.jpg";
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
                    backgroundImage: `url(${coverImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex w-full justify-around items-center text-pridark">
                    <div>
                        <h1 className="text-5xl font-bold py-2">izeberg</h1>
                        <h1 className="text-3xl font-bold py-2">Very Good</h1>
                        <span className="text-xl py-2">Bangkok , Thailand</span>
                        <p className="text-xl py-2">Tech</p>
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
                                <img className="h-56 w-full object-cover" alt="" src={campaignImage} />
                                <div className="bg-white w-full p-4 flex flex-col pt-5">
                                    <h1 className="text-2xl font-bold mb-2">My Campaign</h1>
                                    <div className="w-full h-4 bg-blue-200 rounded-full">
                                        <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-start justify-between pt-8">
                                        <p className="text-gray-900 text-2xl">USD 10000</p>
                                        <p className="text-gray-900 text-2xl">10</p>
                                    </div>
                                    <div className="flex flex-start justify-between">
                                        <p className="text-blue-700 text-md">of $100 target</p>
                                        <p className="text-gray-900 text-md">days left</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewDesktopCreate;
