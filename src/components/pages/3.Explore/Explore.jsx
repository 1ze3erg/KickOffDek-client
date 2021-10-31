import { Link } from "react-router-dom";

function Explore() {
    return (
        <div>
            <h1>Explore</h1>
            <Link to="/project/1" className="text-blue-500 underline">Go to Project</Link>
        </div>
    );
}

export default Explore;
