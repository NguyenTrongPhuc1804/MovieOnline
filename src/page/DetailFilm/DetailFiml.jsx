import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SlideCard from "../../components/SlideCard/SlideCard";
import { getDetailFilm } from "../../redux/reducer/DetailFilmSlice";
import ReactHtmlParser from "react-html-parser";

function DetailFiml() {
  const dispatch = useDispatch();
  const { name } = useParams();

  const detailFilm = useSelector((state) => state.DetailFilm.detailFilm);

  const videoId = detailFilm?.movie?.trailer_url.split("v=")[1];
  useEffect(() => {
    dispatch(getDetailFilm(name));

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full text-white">
        <div
          className="h-[80vh] w-full relative "
          style={{
            backgroundImage: `url("${detailFilm?.movie?.poster_url}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 flex justify-center mt-[50%] sm:mt-[10%] bg-gradient-to-t from-[#181616] ">
            <div className="grid grid-cols-12 sm:grid-cols-3 sm:w-[80%] h-fit w-full p-[7%]  ">
              <div className="col-1 flex px-4 sm:block hidden w[300px] h-[450px] ">
                <img
                  className="rounded-2xl w-full h-full "
                  src={detailFilm?.movie?.thumb_url}
                  alt=""
                />
              </div>
              <div className="sm:col-span-2 col-span-full text-white ">
                <h1 className="sm:text-4xl text-3xl font-bold">
                  {detailFilm?.movie?.name}
                </h1>
                <div className="flex-wrap my-5 ">
                  {detailFilm?.movie?.category.map((item, i) => {
                    return (
                      <button
                        key={i}
                        className="px-4 text-xs py-1 border-[2px] border-white rounded-full mr-2  mb-2"
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="mb-4 line-clamp-4 sm:line-clamp-6  ">
                  <h1 className="">
                    {ReactHtmlParser(detailFilm?.movie?.content)}
                  </h1>
                </div>
                <div className="grid sm:grid-cols-1 grid-cols-2">
                  <div className="sm:flex flex-none sm:mb-4">
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Trạng thái :</h3>
                      <p className="ml-2  text-red-400">Full</p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Định dạng :</h3>
                      <p className="ml-2  text-red-400">Full</p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Năm sản xuất :</h3>
                      <p className="ml-2  text-red-400">Full</p>
                    </div>
                  </div>
                  <div className="sm:flex flex-none sm:mb-4">
                    <div className="flex items-center mr-2 flex-wrap ">
                      <h3 className=" font-bold">Đạo diễn :</h3>
                      <p className="ml-2  text-red-400">Full</p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Quốc gia :</h3>
                      <p className="ml-2  text-red-400">Full</p>
                    </div>
                    <div className="flex items-center mr-2 ">
                      <h3 className=" font-bold">Lượt xem :</h3>
                      <p className="ml-2  text-red-400">Full</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex items-center flex-wrap ">
                    <h3 className=" font-bold">Diễn viên :</h3>
                    <p className="ml-2  text-gray-400">Nguyễn Phúc</p>
                    <p className="ml-2  text-gray-400">Nguyễn Phúc</p>
                    <p className="ml-2  text-gray-400">Nguyễn Phúc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181616] text-white w-full px-[10%] pt-[10%]">
        <h3 className="text-3xl font-bold mb-5">International Trailer </h3>
        {!videoId ? (
          <p className="text-xl font-extrabold">
            Phim hiện không có trailer. Chúng tôi sẽ update trailer sớm nhất có
            thể !!
          </p>
        ) : (
          <iframe
            className="w-full sm:h-[600px] h-[300px]"
            // height={600}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}

        <div className="">
          <SlideCard />
        </div>
      </div>
    </>
  );
}

export default DetailFiml;
