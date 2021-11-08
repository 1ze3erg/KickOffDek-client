import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../config/axios";
import ExpCardPJ from "./ExpCardPJ";

function Explore() {
    const [currentFeed, setCurrentFeed] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        try {
            const fetchProject = async () => {
                const res = await axios.get("/projects/get-all");
                setCurrentFeed(res.data);
            };
            fetchProject();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleClickCategory = (i) => {
        const arr = [...category];
        arr.push(i);
        setCategory(arr);
    };

    const filteredFeed = currentFeed.filter((i) => {
        const isTrue = category.includes(i.Category?.name);
        return isTrue;
    });

    const isClicked = (i) => (category.includes(i) ? "bg-purple-600 text-white" : "");

    return (
        <>
            <div className="grid grid-cols-12 py-10 w-10/12 mx-auto">
                <div className="col-span-10">
                    {}
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "art"
                        )}`}
                        onClick={() => handleClickCategory("art")}
                    >
                        Art &amp; Craft
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "community"
                        )}`}
                        onClick={() => handleClickCategory("community")}
                    >
                        Community &amp; Social goods
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "design"
                        )}`}
                        onClick={() => handleClickCategory("design")}
                    >
                        Design &amp; Fashion
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "environment"
                        )}`}
                        onClick={() => handleClickCategory("environment")}
                    >
                        Environmental
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "event"
                        )}`}
                        onClick={() => handleClickCategory("event")}
                    >
                        Events
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "film"
                        )}`}
                        onClick={() => handleClickCategory("film")}
                    >
                        Film &amp; Video
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "food"
                        )}`}
                        onClick={() => handleClickCategory("food")}
                    >
                        Food &amp; Drinks
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "music"
                        )}`}
                        onClick={() => handleClickCategory("music")}
                    >
                        Music
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "performance"
                        )}`}
                        onClick={() => handleClickCategory("performance")}
                    >
                        Performance
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "photography"
                        )}`}
                        onClick={() => handleClickCategory("photography")}
                    >
                        Photography
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "publishing"
                        )}`}
                        onClick={() => handleClickCategory("publishing")}
                    >
                        Publishing
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "research"
                        )}`}
                        onClick={() => handleClickCategory("research")}
                    >
                        Research
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "socialEnterprise"
                        )}`}
                        onClick={() => handleClickCategory("socialEnterprise")}
                    >
                        Social Enterprise
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "sport"
                        )}`}
                        onClick={() => handleClickCategory("sport")}
                    >
                        Sport
                    </button>
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            "tech"
                        )}`}
                        onClick={() => handleClickCategory("tech")}
                    >
                        Tech &amp; Games
                    </button>
                </div>
                <div className="col-span-2">
                    <button
                        className={`m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white active:bg-purple-600 ${isClicked(
                            []
                        )}`}
                        onClick={() => setCategory([])}
                    >
                        Trending
                    </button>
                </div>
            </div>
            <div className="w-10/12 mx-auto">
                <div className="flex justify-center mb-10">
                    <h1 className="font-extrabold text-lg">Trending Projects</h1>
                </div>
                <div className="grid grid-cols-3">
                    {category.length > 0
                        ? filteredFeed.map((item, idx) => (
                              <div className="m-2 pb-4" key={idx}>
                                  <Link to={`/project/${item.id}`}>
                                      <ExpCardPJ {...item} />
                                  </Link>
                              </div>
                          ))
                        : currentFeed.map((item, idx) => (
                              <div className="m-2 pb-4" key={idx}>
                                  <Link to={`/project/${item.id}`}>
                                      <ExpCardPJ {...item} />
                                  </Link>
                              </div>
                          ))}
                </div>
                <div className="flex justify-center mb-10">
                    <button className="border border-black bg-purple-600 rounded-md p-3 text-white">Load more</button>
                </div>
            </div>
        </>
    );
}

export default Explore;
