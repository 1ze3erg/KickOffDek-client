function ProjectCommunity() {
  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <div className="flex justify-start flex-col w-10/12 mx-auto p-5">
          <h1 className="text-2xl font-bold">Comments</h1>
          <textarea
            className="border border-gray-500 my-2"
            name="comment"
            id=""
            cols="80"
            rows="10"
            placeholder="write your comments here"
          ></textarea>
          <div className="flex justify-end">
            <button className="right-0 py-2 px-8 rounded-md border bg-green-800 text-white border-black">
              Post
            </button>
          </div>
          {/* {comments.map((elem) => (
              <div
                key={elem.id}
                className="py-6 flex justify-items-start items-center"
              >
                <img
                  src={profilePic}
                  alt=""
                  className="rounded-full border border-gray-500"
                />
                <div className="bg-purple-200 rounded-full p-5 mx-2">
                  <h1 className="px-2 font-bold">Username: {elem.userId}</h1>
                  <p className="px-2 inline-block">{elem.message}</p>
                </div>
              </div>
            ))} */}
        </div>
      </div>
      {/* <RewardBar /> */}
    </div>
  );
}

export default ProjectCommunity;
