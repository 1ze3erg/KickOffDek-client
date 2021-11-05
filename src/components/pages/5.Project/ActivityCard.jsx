import parse from "html-react-parser";

function ActivityCard({ title, message, updatedAt }) {
    return (
        <div className="flex justify-start flex-col border border-gray-500 rounded-lg w-10/12 mx-auto p-5 m-5">
            <p>{updatedAt.slice(0, 10)}</p>
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{parse(message)}</p>
            <hr className="m-2" />
            <div>
                <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
                    Share
                </button>
                <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
                    Read more
                </button>
            </div>
        </div>
    );
}

export default ActivityCard;
