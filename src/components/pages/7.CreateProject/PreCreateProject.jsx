import React from "react";
import { Link } from "react-router-dom";
import {
  BsClipboardCheck,
  BsDice5,
  BsChevronRight,
  BsJournalCheck,
  BsMegaphone,
} from "react-icons/bs";

function PreCreateProject() {
  return (
    <>
      <div className="flex flex-row container mx-auto my-20 gap-20">
        <div className="w-1/2">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/518442550?h=8a5670682a"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-1/2 gap-5">
          <h1 className="text-4xl font-semibold my-5">How it works</h1>
          <h2 className="text-sm my-5">
            We provide the best tools for creators to plan, draft and execute
            amazing crowdfunding campaigns for a range of different categories
            and projects.
          </h2>
          <Link className="text-pripurple my-10" to="/create-project">
            Create
          </Link>
        </div>
      </div>
      <div className="bg-prigreen">
        <div className="container mx-auto py-32  text-prilight flex flex-col sm:flex-row items-center gap-10 justify-center ">
          <div className="flex flex-col items-center justify-center gap-5">
            <BsClipboardCheck className="p-7 text-8xl border border-gray-100 rounded-md" />

            <h2 className="text-lg">Start creating your draft</h2>
          </div>
          <BsChevronRight />

          <div className="flex flex-col items-center justify-center gap-5">
            <BsDice5 className="p-7 text-8xl border border-gray-100 rounded-md" />

            <h2 className="text-lg">Build visual campaign page</h2>
          </div>
          <BsChevronRight />
          <div className="flex flex-col items-center justify-center gap-5">
            <BsJournalCheck className="p-7 text-8xl border border-gray-100 rounded-md" />

            <h2 className="text-lg">Submit for approval</h2>
          </div>
          <BsChevronRight />
          <div className="flex flex-col items-center justify-center gap-5">
            <BsMegaphone className="p-7 text-8xl border border-gray-100 rounded-md" />

            <h2 className="text-lg">Launch your campaign</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto my-20 flex flex-col sm:flex-row items-center justify-center">
          <div className="w-1/2 flex flex-col  gap-10 ">
            <h1 className="text-3xl">Ready to launch your campaign?</h1>
            <h2 className="text-xl">Choose your option to get started</h2>
          </div>
          <div className="w-1/2 flex flex-col ">
            {/* <h1 className="text-3xl text-prigreen font-semibold">
              Making It Possible.
            </h1>
            <span className="text-md line-clamp-6 sm:line-clamp-none">
              Since day one we have been focussed on helping creatives and their
              projects find an audience and get the support they need to achieve
              their goals. Pozible was first founded in 2010, but since then
              we’ve launched over 15,656+ projects with a 56% success rate and
              over $100 million in total pledges raised across all campaigns,
              from independent album launches to sustainable
              farming—environmental movements to funding feature films.
            </span> */}
          </div>
        </div>
        <div className="container mx-auto my-20  flex flex-col sm:flex-row items-center justify-center">
          <div className="w-1/2 flex flex-col gap-10  shadow-xl p-5">
            <h1 className="text-sm bg-gray-200 sm:text-md w-1/6">
              Most Popular
            </h1>
            <h1 className="text-xl sm:text-3xl">All-or-Nothing</h1>
            <span>
              Set a funding target and a timeframe of up to 60 days to reach it
              in order to receive your funds! Great for pre-orders, independent
              artists, product launches & plenty more!
            </span>
            <Link
              to="/create-project"
              className="bg-prigreen w-1/3 text-center  text-white  hover:bg-green-500 rounded-xl px-4 py-2"
            >
              Create Project
            </Link>
          </div>
          <div className="w-1/2 flex flex-col gap-10 shadow-xl p-5 ">
            <h1 className="text-sm bg-gray-200 sm:text-md w-1/6">
              Most Popular
            </h1>
            <h1 className="text-xl sm:text-3xl">Fundraising</h1>
            <span>
            Set up a project-based fundraising campaign with zero platform fees. Made for charities and not-for-profit organisations to raise funds for a cause. (Australian projects only)
            </span>
            <Link
              to="/create-project"
              className="bg-prigreen w-1/3 text-center  text-white  hover:bg-green-500 rounded-xl px-4 py-2"
            >
              Create Project
            </Link>
          </div>
        </div>
        <div className="container mx-auto my-20  flex flex-col sm:flex-row items-center justify-center">
          <div className="w-1/2 flex flex-col gap-10  shadow-xl p-5">
            <h1 className="text-sm bg-gray-200 sm:text-md w-2/6">
            Expression of Interest
            </h1>
            <h1 className="text-xl sm:text-3xl">Waitlist</h1>
            <span>
            Create a landing page to capture potential supporters details before you launch your crowdfunding campaign. Build and launch in minutes.
            </span>
            <Link
              to="/create-project"
              className="bg-prigreen w-1/3 text-center text-white  hover:bg-green-500 rounded-xl px-4 py-2"
            >
              Create Project
            </Link>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <h1 className="text-xl sm:text-3xl">
              Connecting your project with likeminded supporters and building a
              community that lasts well beyond your campaign.
            </h1>
          </div>
        </div>
        
      </div>
      <div className="bg-prigreen py-32">
        <div className="flex flex-col text-prilight  items-center justify-center container mx-auto">
          <h1 className="text-xl my-10">
            We're local, based right here in Thailand
          </h1>
          <h1 className="text-4xl flex items-center justify-center">
            Founded in Sydney with our head office in Bangkok,
          </h1>
          <h1 className="text-4xl flex items-center justify-center">
            KICKOFFDEK is 100% Thai owned & operated.
          </h1>
          <button className="my-10 bg-white text-pridark font-semibold p-3 rounded-lg">
            Meet the team
          </button>
        </div>
      </div>
    </>
  );
}

export default PreCreateProject;
