// import img from "../../assets/images/series/wanda.png";
// import imgBanner from "../../assets/images/black-banner.png";
function Card(props) {
  const { film } = props;
  return (
    <>
      <div className="wrapper  z-50 relative cursor-pointer  transition-all group overflow-hidden h-full">
        <button className=" z-10 group-hover:block hidden transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <i className="fa-solid fa-play  bg-black bg-opacity-70 hover:bg-yellow-500 transition-colors  p-5 rounded-full text-white"></i>
        </button>
        <img
          className="w-full h-[300px] sm:h-[500px] object-cover group-hover:scale-110 transition"
          src={film.thumb_url}
          // srcSet="https://img.ophim1.com/uploads/movies/2359-thumb.jpg"
          alt=""
        />
        <div className="absolute bottom-0 pb-6 bg-black p-[3%]  text-white  bg-opacity-70 w-full ">
          {film.origin_name.length > 16 ? (
            <h1 className="text-xl truncate mb-4 font-bold">
              {film.origin_name.slice(0, 16)}...
            </h1>
          ) : (
            <h1 className="text-xl truncate mb-4 font-bold">
              {film.origin_name}
            </h1>
          )}
          <div className="flex sm:justify-start justify-center font-medium">
            {/* <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-star mr-2 text-red-500"></i>
              <p>9.5</p>
            </div> */}
            <div className="flex items-center mr-3 text-xs">
              <i className="fa-solid fa-clock mr-2 text-red-500 sm:block hidden"></i>
              <p>{film.time}</p>
            </div>
            <div className="flex items-center mr-3 text-xs">
              <p className=" mr-2">{film.quality}</p>
              <p>{film.lang}+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
