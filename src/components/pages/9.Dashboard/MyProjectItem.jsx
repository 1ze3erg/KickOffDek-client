import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown, BsChevronUp, BsPencil } from "react-icons/bs";
import { AiOutlineWarning, AiOutlineTrophy } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { formatMoney } from "../../../helpers/format";
import axios from "../../../config/axios";

function MyProjectItem({ projectInfo }) {
    const [showDetail, setShowDetail] = useState(false);
    const [pledges, setPledges] = useState([]);

    useEffect(() => {
        axios
            .get(`/pledges/get-by-project-id/${projectInfo?.id}`)
            .then((res) => {
                setPledges(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [projectInfo?.id]);

    function renderProjectStatus(status) {
        if (status === "live") {
            return (
                <div className="flex flex-row bg-yellow-200 text-yellow-600 px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                    <CgSandClock />
                    <h1 className="">Live</h1>
                </div>
            );
        }

        if (status === "draft") {
            return (
                <div className="flex flex-row bg-gray-200 text-pripurple px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                    <BsPencil />
                    <h1 className="">Draft</h1>
                </div>
            );
        }

        if (status === "successful") {
            return (
                <div className="flex flex-row bg-green-200 text-prigreen px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                    <AiOutlineTrophy />
                    <h1 className="">Successful</h1>
                </div>
            );
        }

        if (status === "failed") {
            return (
                <div className="flex flex-row bg-red-200 text-red-800 px-1 py-1 rounded-xl gap-1 text-xs mx-2 items-center">
                    <AiOutlineWarning />
                    <h1 className="">Failed</h1>
                </div>
            );
        }
    }

    const totalPledge = pledges.reduce((total, elem) => total + +elem.amount, 0);

    return (
        <div
            className="border-b border-gray-300 hover:bg-gray-200 grid grid-cols-12 px-5 py-5 gap-4 w-full items-center"
            key={projectInfo?.id}
        >
            <>
                <div className="col-span-5 flex flex-row items-center">
                    {renderProjectStatus(projectInfo?.status)}
                    <h1 className="font-semibold text-pridark">{projectInfo?.title}</h1>
                </div>
                <div className="col-span-3">
                    {formatMoney(totalPledge, projectInfo.Currency?.name)} pledged
                    <br />
                    of {formatMoney(projectInfo.target, projectInfo.Currency?.name) || "N/A"} target
                </div>
                <div className="col-span-2">
                    <Link to={`/edit-project/${projectInfo?.id}`}>
                        <button className="w-full bg-prigreen transition-colors duration-700 text-white rounded-xl hover:bg-green-800 px-4 py-2">
                            Project Editor
                        </button>
                    </Link>
                </div>
                <div
                    className="text-prigreen hover:bg-gray-300 ml-5 flex flex-row justify-center items-center gap2 col-span-2 cursor-pointer rounded-xl py-2"
                    onClick={() => setShowDetail((currentState) => !currentState)}
                >
                    {showDetail ? "Hide" : "Show"}&nbsp;
                    {showDetail ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </>
            {showDetail && (
                <div className="flex flex-col col-span-12">
                    <div className="flex justify-between items-center font-semibold">
                        <span className="flex-1">Project</span>
                        <span className="flex-1">Starts</span>
                        <span className="flex-1">Ends</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex-1">{projectInfo.Type?.name}</span>
                        <span className="flex-1">{projectInfo?.startDate || "Not Ready"}</span>
                        <span className="flex-1">{projectInfo?.endDate}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyProjectItem;
