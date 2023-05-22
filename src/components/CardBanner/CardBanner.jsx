import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import imgBanner from "../../assets/images/black-banner.png";
import { getFilmInfo } from "../../redux/reducer/ManagementFilmSlice";
import Button from "../Button/Button";
import parse from "html-react-parser";
function CardBanner(props) {
  const dispatch = useDispatch();
  const { film } = props;
  console.log(film?.content.slice(100));
  const htmlString =
    "<div><h1>Hello, world!</h1><p>This is a paragraph.</p></div>";
  useEffect(() => {}, []);
  return (
    <>
      <div className="wrapper relative cursor-pointer   transition-all sm:h-[80vh] h-[51vh] group overflow-hidden h-full">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <button className="text-5xl  z-10 group-hover:block hidden transition-all absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <i className="fa-solid fa-play  bg-black bg-opacity-70 hover:bg-yellow-500 hover:bg-opacity-50 transition-colors  py-5 px-7 rounded-full text-white"></i>
        </button>
        <img
          className="w-full object-cover  transition sm:h-[80vh] h-[55vh]"
          src={film?.poster_url}
          // src={imgBanner}
          // srcSet="https://img.ophim1.com/uploads/movies/2359-thumb.jpg"
          alt=""
        />
        <div className="absolute px-10 py-4 z-10 sm:w-[40%] top-1/2 transform  -translate-y-1/2  p-[3%]  text-white   bg-opacity-70 w-full ">
          {film?.name.length > 50 ? (
            <motion.h1
              whileInView={{ opacity: [0, 1] }}
              transition={{ ease: "easeOut", duration: 0.75 }}
              className="sm:text-5xl text-2xl mb-5 font-bold"
            >
              {film?.name.slice(0, 50)}...
            </motion.h1>
          ) : (
            <motion.h1
              whileInView={{ opacity: [0, 1] }}
              transition={{ ease: "easeOut", duration: 0.75 }}
              className="sm:text-5xl text-2xl mb-5 font-bold"
            >
              {film?.name}
            </motion.h1>
          )}

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 0.75 }}
            className="flex justify-start font-medium mb-3 sm:mb-9"
          >
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
          </motion.div>
          <motion.div
            whileInView={{ y: [-100, 0] }}
            transition={{ ease: "easeOut", duration: 1 }}
            className=" justify-start font-medium "
          >
            {film?.content.length > 150 ? (
              <p className="mb-5 text-xs sm:text-base">
                {film?.content.slice(0, 150)}...
              </p>
            ) : (
              <p className="mb-5 text-xs sm:text-base">{film?.content}</p>
            )}

            <Button text="watch now" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default CardBanner;
