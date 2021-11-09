import React, { useState } from "react";
import ModalProjectDetails from "./ModalProjectDetails";

function AdminHome() {
  const [openModal, setOpenModal] = useState(false);
  const pledgeInfo = "deeznuts";
  return (
    <div>
      <div className="h-screen">
        <table class="min-w-full table-auto">
          <thead class="justify-between">
            <tr class="bg-gray-800">
              <th class="px-16 py-2">
                <span class="text-gray-300"></span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Project Name</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Details</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Category</span>
              </th>

              <th class="px-16 py-2">
                <span class="text-gray-300">Create time</span>
              </th>

              <th class="px-16 py-2">
                <span class="text-gray-300">Status</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            <tr class="bg-white border-4 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">Dean Lynch</span>
              </td>
              <td class="px-16 py-2">
                <button onClick={() => setOpenModal(true)} class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                  Open Link
                </button>
              </td>
              <td class="px-16 py-2">
                <span>Photography</span>
              </td>
              <td class="px-16 py-2">
                <span>21/10/2021 10:00</span>
              </td>

              <td class="px-16 py-2">
                <span class="">
                  <button className="mx-3 px-3 py-1 rounded-xl bg-red-500 text-white hover:bg-red-800">
                    Reject
                  </button>
                  <button className="mx-3 px-3 py-1 rounded-xl bg-prigreen text-white hover:bg-green-300">
                    Approve Launch
                  </button>
                </span>
              </td>
            </tr>
            {openModal && <ModalProjectDetails closeModal={setOpenModal} pledgeInfo={pledgeInfo} />}
            {/* <tr class="bg-white border-4 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">Ralph Barnes</span>
              </td>
              <td class="px-16 py-2">
                <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                  Open Link
                </button>
              </td>
              <td class="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td class="px-16 py-2">
                <span>12:15</span>
              </td>

              <td class="px-16 py-2">
                <span class="text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr class="bg-white border-4 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/38.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">
                  Brett Castillo
                </span>
              </td>
              <td class="px-16 py-2">
                <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                  Open Link
                </button>
              </td>
              <td class="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td class="px-16 py-2">
                <span>08:35</span>
              </td>

              <td class="px-16 py-2">
                <span class="text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHome;
