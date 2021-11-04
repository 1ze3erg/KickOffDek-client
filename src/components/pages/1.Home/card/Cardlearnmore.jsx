function Cardlearnmore() {
  return (
    <div className="overflow-hidden shadow-lg transform   rounded-lg w-68 m-auto mx-3 text-pridark">
      <div className="w-full block h-full">
        <img
          className="h-48 w-full object-cover"
          alt=""
          src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634239094/pexels-photo-5901260_ugidbf.jpg"
        />
        
        <div className="bg-white w-full p-4 flex flex-col pt-4">
          
          <div>
              <h1>Craighton Berman's advice for simple creative campaigns</h1>
            <h2 className="text-sm text-gray-500 mt-4 line-clamp-5">
            This designer relies on big campaigns to build his independent practice. But here’s how he gives himself a break—and new opportunities—with smaller campaigns.
            </h2>
          </div>

          <button className=" text-white  my-5 rounded-lg h-10 bg-prigreen transition-colors duration-700   hover:bg-gray-700">
            Explore more...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cardlearnmore;
