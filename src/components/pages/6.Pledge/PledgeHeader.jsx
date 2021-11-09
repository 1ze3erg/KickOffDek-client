import { BsXLg } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

function PledgeHeader({ title }) {
    const { projectId } = useParams();
    return (
        <div className="flex justify-between items-center bg-prigreen w-full h-16 py-9 text-white px-7">
            <div className="flex flex-row">
                <h1 className="text-xl mr-5">Pledge</h1>
                <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <Link to={`/project/${projectId}`}>
                <BsXLg className="text-sm cursor-pointer" />
            </Link>
        </div>
    );
}

export default PledgeHeader;
