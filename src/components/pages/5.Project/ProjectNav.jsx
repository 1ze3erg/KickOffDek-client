import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { BiSitemap } from "react-icons/bi";

function ProjectNav({ page, setPage }) {
    return (
        <div className="flex justify-center bg-gray-100">
            <button
                className={`px-5 py-3 text-lg font-semibold  ${
                    page === 1 ? "border-b-4 text-pridark border-pridark" : "text-prigreen"
                } hover:text-pridark hover:border-pridark hover:border flex justify-center items-center`}
                onClick={() => setPage(1)}
            >
                <AiOutlineProject className="mr-2" />
                <span>Campaign</span>
            </button>

            <button
                className={`px-5 py-3 text-lg font-semibold  ${
                    page === 2 ? "border-b-4 text-pridark border-pridark" : "text-prigreen"
                } hover:text-pridark hover:border-pridark hover:border flex justify-center items-center`}
                onClick={() => setPage(2)}
            >
                <BiSitemap className="mr-2" />
                <span>Activities</span>
            </button>

            <button
                className={`px-5 py-3 text-lg font-semibold  ${
                    page === 3 ? "border-b-4 text-pridark border-pridark" : "text-prigreen"
                } hover:text-pridark hover:border-pridark hover:border flex justify-center items-center`}
                onClick={() => setPage(3)}
            >
                <IoChatbubblesOutline className="mr-2" />
                <span>Community</span>
            </button>
        </div>
    );
}

export default ProjectNav;
