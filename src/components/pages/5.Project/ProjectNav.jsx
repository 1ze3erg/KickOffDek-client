import React from "react";

function ProjectNav({ setPage }) {
  return (
    <div className="flex justify-center bg-gray-900">
      <div>
        <button
          className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black"
          onClick={() => setPage(1)}
        >
          Campaign
        </button>
      </div>

      <button
        className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black"
        onClick={() => setPage(2)}
      >
        Activities
      </button>

      <button
        className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black"
        onClick={() => setPage(3)}
      >
        Community
      </button>
    </div>
  );
}

export default ProjectNav;
