import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cardpledge from "./card/Cardpledge";
import Cardpledgenobutton from "./card/Cardpledgenobutton";
import Cardrewardcheckout from "./card/Cardrewardcheckout";
import Cardrewardonedit from "./card/Cardrewardonedit";
import Cardlearnmore from "./card/Cardlearnmore";

function Home() {
    return (
        <>
            <div className="container mx-auto ">
                <section className="relative">
                    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-2 lg:mt-4">
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h2 className="text-pridark text-4xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                                Shaping ideas, creating
                            </h2>
                            <h2 className="text-prigreen text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                                together
                            </h2>
                            <p className="text-gray-600 text-md text-center lg:text-left mb-6">
                                Pozible is a leading crowdfunding platform & community for creative projects, emerging
                                brands and inspiring causes. We provide a way for creators to access funding beyond
                                ‘official’ channels by talking directly to switched-on consumers, fans, peers and
                                like-minded community members.
                            </p>
                            <div className="flex justify-center flex-wrap gap-6">
                                <Link to="/create-project">
                                    <button
                                        type="button"
                                        className="px-3 bg-prigreen transition-colors duration-700 text-white h-12 rounded-xl hover:bg-green-900"
                                    >
                                        Create a campaign
                                    </button>
                                </Link>
                                <Link to="/explore">
                                    <button
                                        type="button"
                                        className="px-3 bg-priorange transition-colors duration-700 text-white h-12 rounded-xl hover:bg-red-500"
                                    >
                                        Support a campaign
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                            <img
                                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                                src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1635757630/pngegg_r0kh23.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div
                        className="
          hidden
          md:block
          overflow-hidden
          bg-prigreen
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
                    ></div>
                </section>

                <section className=" flex flex-col items-center justify-center mt-5">
                    <h1 className="text-pridark text-xl  lg:text-4xl text-center mb-6">
                        Creative work shows us what’s possible.
                    </h1>
                    <h1 className="text-pridark text-xl  lg:text-3xl text-center mb-6">Help fund it here.</h1>
                    <h3 className="text-sm text-priorange  lg:text-md text-center mb-6">
                        WITHIN THE LAST DAY
                    </h3>
                    <div className="grid grid-cols-3 gap-4 ">
                        <div className="flex flex-col justify-center items-center rounded-xl w-96 border-2 border-gray-300">
                            <span className="py-3 text-3xl text-prigreen">123</span>
                            <span className="pb-2 text-sm text-gray-600">projects funded</span>
                        </div>
                        <div className="flex flex-col justify-center items-center rounded-xl  w-96 border-2 border-gray-300">
                            <span className="py-3 text-3xl text-prigreen">$1,726,039</span>
                            <span className="pb-2 text-sm text-gray-600">towards creative work</span>
                        </div>
                        <div className="flex flex-col justify-center items-center rounded-xl  w-96 border-2 border-gray-300 ">
                            <span className="py-3 text-3xl text-prigreen">18,846</span>
                            <span className="pb-2 text-sm text-gray-600">backings</span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-pridark text-white">
                <section>
                    <div className="container mx-auto  flex flex-col items-center mt-16">
                        <h1 className="my-16 text-3xl font-semibold">Trending Projects</h1>
                        <div className="flex flex-row justify-between gap-10 my-10">
                            <Cardpledge />
                            <Cardpledgenobutton />
                            <Cardrewardcheckout />
                            <Cardrewardonedit />
                        </div>

                        <button className="w-56 my-5 bg-priorange transition-colors duration-700 text-white h-12 rounded-xl hover:bg-red-500">
                            See more
                        </button>
                    </div>
                </section>

                <section>
                    <div className="mt-32 flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-semibold my-5">Highlights</h1>
                        <h1 className="text-2xl my-5">Success stories and latest updates</h1>
                        <div className="flex justify-center ">
                            <div className="mx-3 relative top-24 w-12 h-12 rounded-full text-prigreen bg-white text-3xl font-normal flex items-center justify-center hover:bg-prigreen hover:text-white">
                                <FaAngleLeft />
                            </div>
                            <img
                                className="w-240 h-120 object-cover shadow-2xl rounded-xl"
                                src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634233045/photo-1526485856375-9110812fbf35_yqwrab.jpg"
                                alt="highlights"
                            />
                            <div className="mx-3 relative top-24 w-12 h-12 rounded-full text-prigreen bg-white text-3xl font-normal flex items-center justify-center hover:bg-prigreen hover:text-white">
                                <FaAngleRight />
                            </div>
                        </div>
                        <div className="flex justify-center my-5 gap-4 mb-32">
                            <div className="h-3 w-3 bg-prigreen rounded-full"></div>
                            <div className="h-3 w-3 bg-prilight rounded-full"></div>
                            <div className="h-3 w-3 bg-prilight rounded-full"></div>
                            <div className="h-3 w-3 bg-prilight rounded-full"></div>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <div className="container mx-auto  flex flex-col items-center mt-32">
                    <h1 className="my-8 text-3xl font-semibold">Dont know where to start your project, right?</h1>
                    <h1 className="my-3 text-xl text-priorange">
                        Learn more about how people create cool things here.
                    </h1>
                    <div className="flex flex-row justify-between gap-10 my-10">
                        <Cardlearnmore />
                        <Cardlearnmore />
                        <Cardlearnmore />
                    </div>
                </div>
            </section>

            <section className="container mx-auto mt-10  text-black py-20">
                <div className="container">
                    <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                        <p className="font-light uppercase text-center mb-8">35,000+ PEOPLE ALREADY CREATED PROJECTS</p>
                        <h1 className="text-3xl text-center">Stay up-to-date with the latest news</h1>
                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="border border-gray-400 focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
                            />
                            <button
                                type="button"
                                className="w-32 bg-priorange transition-colors duration-700 text-white h-12 rounded-xl hover:bg-red-500"
                            >
                                Join us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
