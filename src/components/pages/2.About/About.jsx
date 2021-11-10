import { BsTrophy } from "react-icons/bs";
import { GiReceiveMoney, GiWorld } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

function About() {
    return (
        <>
            <div className="bg-pridark">
                <div className="container mx-auto py-32  text-prilight grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                        <BsTrophy className="p-9 text-8xl border border-gray-100 rounded-md" />
                        <h1 className="text-3xl my-5">56%</h1>
                        <h2 className="text-lg">Success Rate</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <GiReceiveMoney className="p-9 text-8xl border border-gray-100 rounded-md" />
                        <h1 className="text-3xl my-5">$100M+</h1>
                        <h2 className="text-lg">Raised via Crowdfunding</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <HiOutlineLightBulb className="p-9 text-8xl border border-gray-100 rounded-md" />
                        <h1 className="text-3xl my-5">15,700+</h1>
                        <h2 className="text-lg">Projects Launched</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <GiWorld className="p-9 text-8xl border border-gray-100 rounded-md" />
                        <h1 className="text-3xl my-5">105</h1>
                        <h2 className="text-lg">Countries Pledged From</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto my-20 flex flex-col sm:flex-row items-center justify-center">
                    <div className="w-1/2 flex items-center justify-center ">
                        <iframe
                            className="rounded-xl shadow-xl"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/TIusBBMmvjs"
                            title="video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="w-1/2 flex flex-col ">
                        <h1 className="text-3xl text-prigreen font-semibold">Making It Possible.</h1>
                        <span className="text-md line-clamp-6 sm:line-clamp-none">
                            Since day one we have been focussed on helping creatives and their projects find an audience
                            and get the support they need to achieve their goals. Pozible was first founded in 2010, but
                            since then we’ve launched over 15,656+ projects with a 56% success rate and over $100
                            million in total pledges raised across all campaigns, from independent album launches to
                            sustainable farming—environmental movements to funding feature films.
                        </span>
                    </div>
                </div>
                <div className="container mx-auto my-20  flex flex-col sm:flex-row items-center justify-center">
                    <div className="w-1/2 flex items-center justify-center">
                        <h1 className="text-xl sm:text-3xl">
                            We provide the best tools for creators to plan, draft and execute amazing crowdfunding
                            campaigns for a range of different categories and projects.
                        </h1>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1636452589/Illustration_1_rmxorr.svg"
                            alt="showImage"
                        />
                    </div>
                </div>
                <div className="container mx-auto my-20  flex flex-col sm:flex-row items-center justify-center">
                    <div className="w-1/2 flex items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1636452588/Illustration_2_i1clhz.svg"
                            alt="showImage"
                        />
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <h1 className="text-xl sm:text-3xl">
                            Connecting your project with likeminded supporters and building a community that lasts well
                            beyond your campaign.
                        </h1>
                    </div>
                </div>
                <div className="container mx-auto my-20  flex flex-col sm:flex-row items-center justify-center">
                    <div className="w-1/2 flex items-center justify-center">
                        <h1 className="text-xl sm:text-3xl">
                            We are proud to host and work with a range of amazing initiatives from environmental and
                            social causes, feature and indie film productions, arts and theatre, independent publishing,
                            music projects, product launches and everything else in between.
                        </h1>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1636452588/Illustration_3_a6bpfr.svg"
                            alt="showImage"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-prigreen py-32">
                <div className="flex flex-col text-prilight  items-center justify-center container mx-auto">
                    <h1 className="text-xl my-10">We're local, based right here in Thailand</h1>
                    <h1 className="text-4xl flex items-center justify-center">
                        Founded in Sydney with our head office in Bangkok,
                    </h1>
                    <h1 className="text-4xl flex items-center justify-center">
                        KICKOFFDEK is 100% Thai owned & operated.
                    </h1>
                    <button className="my-10 bg-white text-pridark font-semibold p-3 rounded-lg">Meet the team</button>
                </div>
            </div>
        </>
    );
}

export default About;
