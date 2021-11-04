import { Link } from "react-router-dom";

function Home({ Home, MyProject }) {
    return (
        <div className="sm:w1/4 w-3/4 mx-auto bg-prilight rounded-xl shadow-xl p-10 mt-12 flex flex-col justify-center items-center">
            <div className="text-3xl text-prigreen">Welcome to KICKOFFDEK</div>
            <iframe
                className="mt-10 rounded-xl shadow-xl"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/voF1plqqZJA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div className="mt-10">
                <Link to="/explore">
                    <button
                        className="rounded-xl text-white bg-prigreen hover:bg-green-800 w-20 h-10 text-md font-semibold mx-3"
                        onClick=""
                    >
                        Explore
                    </button>
                </Link>

                <button
                    className="rounded-xl text-white bg-priorange hover:bg-red-500 w-48 h-10 text-md font-semibold mx-3"
                    onClick={() => {
                        Home(false);
                        MyProject(true);
                    }}
                >
                    Project Dashboard
                </button>
            </div>
        </div>
    );
}

export default Home;
