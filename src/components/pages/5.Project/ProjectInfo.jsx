import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HiOutlineShare } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { formatMoney } from "../../../helpers/format";
import { calDiffDay } from "../../../helpers/calculate";
import axios from "../../../config/axios";
import { Link } from "react-router-dom";

function ProjectInfo() {
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    const [pledge, setPledge] = useState([]);
    const [currencies, setCurrencies] = useState([]);

    const {
        Category,
        currencyId,
        title,
        target,
        endDate,
        organization,
        tagline,
        province,
        country,
        facebook,
        instagram,
        twitter,
        website,
        coverImage,
        campaignImage,
    } = project;

    useEffect(() => {
        try {
            const fetchProjectById = async () => {
                const res = await axios.get(`/projects/get-by-id/${projectId}`);
                setProject(res.data);
            };
            fetchProjectById();
        } catch (error) {
            console.log(error);
        }
    }, [projectId]);

    useEffect(() => {
        try {
            const fetchPledge = async () => {
                const res = await axios.get(`/pledges/get-by-project-id/${projectId}`);
                setPledge(res?.data);
            };
            fetchPledge();
        } catch (error) {
            console.log(error);
        }
    }, [projectId]);

    useEffect(() => {
        axios
            .get("/currencies/get-all")
            .then((res) => {
                setCurrencies(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const currency = currencies.find((elem) => elem.id === +currencyId)?.name;
    const totalPledge = pledge.reduce((acc, i) => {
        return acc + +i?.amount;
    }, 0);

    return (
        <div style={{ backgroundImage: `url(${coverImage})`, backgroundSize: "cover" }} className="relative h-screen">
            <div className="absolute inset-x-20 inset-y-1/3 mx-2 text-white">
                <h1 className="text-7xl font-bold py-2">{organization || "Organization"}</h1>
                <h1 className="text-3xl font-bold py-2">{tagline || "Tagline"}</h1>
                <span className="text-xl py-2">
                    {province || "Province"}, {country || "Country"}
                </span>
                <p className="text-xl py-2">{Category?.name}</p>
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
                    <a href={`https://www.facebook.com/${facebook}`} title={facebook} target="_blank" rel="noreferrer">
                        <FaFacebookSquare className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                    <a
                        href={`https://www.instagram.com/${instagram}`}
                        title={instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                    <a href={`https://www.twitter.com/${twitter}`} title={twitter} target="_blank" rel="noreferrer">
                        <FaTwitter className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                    <a href={`https://${website}`} title={website} target="_blank" rel="noreferrer">
                        <IoEarthOutline className="mx-2 p-1 text-4xl cursor-pointer hover:bg-prilight hover:text-pridark rounded" />
                    </a>
                </div>
            </div>
            <div className="absolute bottom-20 right-20">
                <div className="text-gray-600 overflow-hidden shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg w-72 cursor-pointer m-auto mx-3">
                    <div className="w-full block h-full">
                        <img
                            className="h-48 w-full object-cover"
                            alt="campaignImage"
                            src={campaignImage || "https://picsum.photos/1920/1080"}
                        />
                        <div className="absolute top-20 h-28 w-full bg-gradient-to-t from-gray-800 flex items-center justify-center">
                            <h1 className="text-2xl text-white line-clamp-2 mx-5">{title || "My Campaign"}</h1>
                        </div>
                        <div className="bg-white w-full p-4 flex flex-col pt-8">
                            <div className="w-full h-4 bg-prilight rounded-full">
                                <div className="w-2/3 h-full text-center text-xs text-white bg-priorange rounded-full"></div>
                            </div>
                            <div className="flex flex-start justify-between pt-8">
                                <p className="text-pridark text-2xl">{formatMoney(totalPledge, currency)}</p>
                                <p className="text-pridark text-2xl">{calDiffDay(endDate) || 0}</p>
                            </div>
                            <div className="flex flex-start justify-between">
                                <p className="text-md">of {formatMoney(+target, currency)?.slice(0, -3) || 0} target</p>
                                <p className="text-md">days left</p>
                            </div>
                            <Link to={`/pledge/${projectId}/0`}>
                                <button className="w-full h-12 rounded-xl text-white text-lg mt-3 bg-prigreen transition-colors duration-700 hover:bg-gray-700">
                                    Pledge Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;
