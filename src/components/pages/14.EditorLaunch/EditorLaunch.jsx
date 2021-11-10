import { Link, useParams } from "react-router-dom";
import { BsChevronCompactRight, BsPencil, BsFileEarmarkCheck, BsClipboardCheck, BsArrowLeft } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../config/axios";

function EditorLaunch() {
    const { projectId } = useParams();
    const [projectStatus, setProjectStatus] = useState("");

    useEffect(() => {
        axios
            .get(`/projects/get-by-id/${projectId}`)
            .then((res) => {
                setProjectStatus(res.data?.status);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, [projectId]);

    const clickSubmitProject = async () => {
        try {
            await axios.put(`/projects/user-update-status/${projectId}`, { status: "review" });
            setProjectStatus("review");
            alert("Your project is in review status");
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="px-5 pt-7 pb-12">
            <Link
                to={`/edit-project/${projectId}`}
                className="text-prigreen font-semibold flex flex-row items-center gap-4"
            >
                <BsArrowLeft /> <span>Back to Editor Project</span>
            </Link>
            {/* กรอกไม่ครบ */}
            {/* <h1>กรอกไม่ครบ</h1>
            <div className="flex flex-row gap-4 items-center my-10 ">
                <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-300 border-gray-300 rounded-xl shadow-xl">
                    <BsPencil />
                    <h1>Draft</h1>
                    <span>Submit for review once you complete the checklist.</span>
                </div>
                <BsChevronCompactRight className="text-3xl" />
                <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-300 border-gray-300 rounded-xl shadow-xl">
                    <BsFileEarmarkCheck />
                    <h1>Review</h1>
                    <span>Review We are currently reviewing your project.</span>
                </div>
                <BsChevronCompactRight className="text-3xl" />
                <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-300 border-gray-300 rounded-xl shadow-xl">
                    <GoMegaphone />
                    <h1>Live</h1>
                    <span>Your project is LIVE, time to make some noise!</span>
                </div>
            </div> */}
            {/* กรอกครบเป็น draft  */}
            {/* <h1>กรอกครบเป็น draft </h1> */}
            {projectStatus === "draft" && (
                <>
                    <div className="flex flex-row gap-4 items-center my-10 ">
                        <div className="flex flex-col items-center justify-center p-10 w-96 text-gray-800 border border-green-500 rounded-xl shadow-xl">
                            <BsPencil />
                            <h1>Draft</h1>
                            <span>Submit for review once you complete the checklist.</span>
                        </div>
                        <BsChevronCompactRight className="text-3xl" />
                        <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-300 border-gray-300 rounded-xl shadow-xl">
                            <BsFileEarmarkCheck />
                            <h1>Review</h1>
                            <span>Review We are currently reviewing your project.</span>
                        </div>
                        <BsChevronCompactRight className="text-3xl" />
                        <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-300 border-gray-300 rounded-xl shadow-xl">
                            <GoMegaphone />
                            <h1>Live</h1>
                            <span>Your project is LIVE, time to make some noise!</span>
                        </div>
                    </div>

                    <h3 className="text-sm w-3/4">
                        I (we) am (are) aware that it is my (our) personal responsibility to deliver the Rewards I (we)
                        have promised to Supporters if my (our) Project is successful and to do so by the date(s) stated
                        to Supporters of the Project. Failure to deliver the Rewards as stated and on time may leave me
                        (us) in breach of consumer protection law and require me (us) to provide a full refund to my
                        (our) Project Supporters. I (we) declare all information I (we) have provided is true and within
                        the laws of my (our) location. Provision of information later found to be false may lead to the
                        cancellation of my (our) Project on this platform. Read complete Terms & Conditions.
                    </h3>
                    <input className="mt-10" type="checkbox" />
                    <span className="mx-3">I agree to the Terms & Conditions of running a project.</span>
                    <button
                        className="rounded-xl text-white bg-prigreen hover:bg-green-800 px-5 py-2 text-md font-semibold mx-3"
                        onClick={clickSubmitProject}
                    >
                        Submit
                    </button>
                </>
            )}
            {/*กด Submit แล้ว  */}
            {/* <h1>กด Submit แล้ว </h1> */}
            {projectStatus === "review" && (
                <>
                    <div className="flex flex-row gap-4  items-center my-10 ">
                        <div className="flex flex-col items-center justify-center p-10 w-96 text-gray-800 border border-green-500 rounded-xl shadow-xl">
                            <BsPencil />
                            <h1>Draft</h1>
                            <span>Submit for review once you complete the checklist.</span>
                        </div>
                        <BsChevronCompactRight className="text-3xl" />
                        <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-800 border-green-500 rounded-xl shadow-xl">
                            <BsFileEarmarkCheck />
                            <h1>Review</h1>
                            <span>Review We are currently reviewing your project.</span>
                        </div>
                        <BsChevronCompactRight className="text-3xl" />
                        <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-300 border-gray-300 rounded-xl shadow-xl">
                            <GoMegaphone />
                            <h1>Live</h1>
                            <span>Your project is LIVE, time to make some noise!</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center my-20 gap-5">
                        <BsClipboardCheck className="text-7xl hover:text-prigreen" />
                        <h3 className="text-2xl text-center">Thank you for your submission</h3>
                        <h3 className="text-lg text-center">
                            While we are preparing feedbacks, check out the rest of your checklists to review them.
                        </h3>
                    </div>
                </>
            )}
            {/*กด Submit แล้ว  */}
            {/* <h1>กด Submit แล้ว </h1> */}
            {projectStatus === "live" && (
                <>
                    <div className="flex flex-row gap-4  items-center my-10 ">
                        <div className="flex flex-col items-center justify-center p-10 w-96 text-gray-800 border border-green-500 rounded-xl shadow-xl">
                            <BsPencil />
                            <h1>Draft</h1>
                            <span>Submit for review once you complete the checklist.</span>
                        </div>
                        <BsChevronCompactRight className="text-3xl" />
                        <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-800 border-green-500 rounded-xl shadow-xl">
                            <BsFileEarmarkCheck />
                            <h1>Review</h1>
                            <span>Review We are currently reviewing your project.</span>
                        </div>
                        <BsChevronCompactRight className="text-3xl" />
                        <div className="flex flex-col items-center justify-center p-10 w-96 border text-gray-800 border-green-500 rounded-xl shadow-xl">
                            <GoMegaphone className="text-red-600" />
                            <h1>Live</h1>
                            <span>Your project is LIVE, time to make some noise!</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center my-20 gap-5">
                        <GoMegaphone className="text-7xl text-red-600 hover:text-priorange" />
                        <h3 className="text-2xl text-center">Your project is currently live funding!</h3>
                        <h3 className="text-lg text-center">
                            You may see your summary on your dashboard , Keep it up!
                        </h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default EditorLaunch;
