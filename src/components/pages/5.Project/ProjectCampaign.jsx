function ProjectCampaign() {
  const mainPic = "https://picsum.photos/200/200";
  const mainVid = "https://www.youtube.com/embed/Alm-YjqwDGU";
  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <h1 className="text-2xl font-bold my-2">About this project</h1>
        <img
          className="my-2 mx-auto"
          //   src={campaignImage}
          src={mainPic}
          alt="KickOffDek"
          width="300"
          height="200"
        />
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem, suscipit? Fugit maiores vitae in
          explicabo, veritatis rerum sint vel aliquid.
        </p>
        <iframe
          className="my-2 mx-auto"
          //   src={pitchVideo}
          src={mainVid}
          width="700"
          height="500"
        ></iframe>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem, suscipit? Fugit maiores vitae in
          explicabo, veritatis rerum sint vel aliquid. adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid.
        </p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem, suscipit? Fugit maiores vitae in
          explicabo, veritatis rerum sint vel aliquid. adipisicing elit.
          Exercitationem, suscipit? Fugit maiores vitae in explicabo, veritatis
          rerum sint vel aliquid.
        </p>
      </div>

      {/* <RewardBar /> */}
    </div>
  );
}

export default ProjectCampaign;
