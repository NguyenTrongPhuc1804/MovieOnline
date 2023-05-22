// import img from "../../assets/images/series/wanda.png";
// import imgBanner from "../../assets/images/black-banner.png";
function Card(props) {
  const { img } = props;
  return (
    <>
      <div className="wrapper  z-50 relative cursor-pointer  transition-all group overflow-hidden h-full">
        <button className=" z-10 group-hover:block hidden transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <i className="fa-solid fa-play  bg-black bg-opacity-70 hover:bg-yellow-500 transition-colors  p-5 rounded-full text-white"></i>
        </button>
        <img
          className="w-full h-[300px] sm:h-[500px] object-cover group-hover:scale-110 transition"
          src={`https://img.ophim1.com${img}`}
          // srcSet="https://img.ophim1.com/uploads/movies/2359-thumb.jpg"
          alt=""
        />
        <div className="absolute bottom-0 pb-6 bg-black p-[3%]  text-white  bg-opacity-70 w-full ">
          <h1 className="text-xl mb-4 font-bold">Wanda Vison</h1>
          <div className="flex justify-start font-medium">
            <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-star mr-2 text-red-500"></i>
              <p>9.5</p>
            </div>
            <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-clock mr-2 text-red-500"></i>
              <p>120m</p>
            </div>
            <div className="flex items-center mr-3 text-xs">
              <p className=" mr-2">HD</p>
              <p>16+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
