import { calcLength } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailFilm, getTheLoai } from "../../redux/reducer/DetailFilmSlice";
import { getFilmHomePage } from "../../redux/reducer/ManagementFilmSlice";
import Button from "../Button/Button";
import SlideCard from "../SlideCard/SlideCard";

function PlayerVideo() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const detailFilm = useSelector((state) => state.DetailFilm.detailFilm);
  const PhimMoi = useSelector((state) => state.ManagementFilmSlice.PhimMoi);

  const { listTheLoai } = useSelector((state) => state.DetailFilm);

  const [seeMore, setSeeMore] = useState(false);
  const [episode, setEpisode] = useState(
    detailFilm?.item?.episodes[0]?.server_data[0]?.link_embed
  );
  const [changeServe, setChangeServe] = useState(0);

  console.log(detailFilm?.item?.episodes[0].server_data[0].link_embed);
  //   console.log(name);
  useEffect(() => {
    dispatch(getDetailFilm(name));
    dispatch(getTheLoai(localStorage.getItem("randomCategory")));
    dispatch(getFilmHomePage());
  }, []);
  const text =
    "Họ không sợ khó khăn, dũng cảm và quyết tâm không bỏ cuộc trong việc theo đuổi mục tiêu của mình. Cùng nhau, họ trải qua những thăng trầm, đồng hành và cống hiến cho nhau để đạt tới đỉnh cao thành công. Sự kiên trì và sự đồng lòng giữa hai người giúp họ vượt qua mọi trở ngại và vươn tới những giấc mơ mà họ mong đợiHọ không sợ khó khăn, dũng cảm và quyết tâm không bỏ cuộc trong việc theo đuổi mục tiêu của mình. Cùng nhau, họ trải qua những thăng trầm, đồng hành và cống hiến cho nhau để đạt tới đỉnh cao thành công. Sự kiên trì và sự đồng lòng giữa hai người giúp họ vượt qua mọi trở ngại và vươn tới những giấc mơ mà họ mong đợiHọ không sợ khó khăn, dũng cảm và quyết tâm không bỏ cuộc trong việc theo đuổi mục tiêu của mình. Cùng nhau, họ trải qua những thăng trầm, đồng hành và cống hiến cho nhau để đạt tới đỉnh cao thành công. Sự kiên trì và sự đồng lòng giữa hai người giúp họ vượt qua mọi trở ngại và vươn tới những giấc mơ mà họ mong đợi";
  return (
    <div className="bg-[#181616]  text-white pt-[1%]">
      <div className=" w-full">
        <iframe
          className="sm:h-[80vh] h-[30vh] w-full sm:w-[80%] m-auto sm:mt-[5rem] mt-[5rem] lg:mt-[6.3rem]"
          title="video player"
          src={episode}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
      <div className="w-fit m-auto  p-3 border-[1px]  border-white mt-[3%]">
        <div className="text-xs sm:text-lg font-bold ">Server :</div>
        <div className="flex">
          {detailFilm?.item?.episodes.map((server, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setChangeServe(Number(server.server_name.slice(-1)) - 1);
                }}
                className=" mr-2"
              >
                <Button text={server.server_name} color="537188" />
              </div>
            );
          })}
        </div>
        <h1 className="text-xs sm:text-lg font-bold mt-3">
          Danh sách tập phim :{" "}
        </h1>
        <div className="flex-wrap  text-center">
          {detailFilm?.item?.episodes[changeServe]?.server_data.map(
            (link, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    setEpisode(link.link_embed);
                  }}
                  className={` mr-2 my-2 text-xs border-[2px] border-red-700 rounded-md z-20  text-white font-bold px-3 py-1  after:transition-all group  after:hover:translate-x-0 overflow-hidden relative after:content-[''] after:w-full after:h-full ${
                    episode === link.link_embed
                      ? " sm:after:translate-x-[0%]"
                      : " sm:after:translate-x-[-100%]"
                  }  after:absolute after:top-0 after:left-0 after:bg-red-600 after:-z-10`}
                >
                  Tập {link.name}
                </button>
              );
            }
          )}
        </div>
      </div>
      <div className="mt-[2%] px-[10%]">
        <div className="">
          <div className="relative  py-2 text-3xl font-bold mt-5 text-white">
            {/* <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div> */}
            <p>{detailFilm?.item?.name}</p>
          </div>
        </div>
        <h3 className="text-lg font-bold">{detailFilm?.item?.origin_name}</h3>
        <div className="mt-[20px] p-5 border-[1px] border-gray-500">
          <h3 className="text-lg font-bold">Nội dung phim :</h3>
          <h5 className="text-base ">
            {!seeMore
              ? detailFilm?.item?.content.slice(0, 150)
              : detailFilm?.item?.content}

            {!seeMore ? (
              <span
                onClick={() => {
                  setSeeMore(true);
                }}
                className="text-blue-500 cursor-pointer ml-2"
              >
                xem thêm ....
              </span>
            ) : (
              ""
            )}
          </h5>
          <div className="mt-[20px]">
            <div className="mb-2">Tags</div>
            {detailFilm?.item?.category.map((category, i) => (
              <button
                key={i}
                className="px-3 py-1 bg-black text-gray-400 mr-2 hover:bg-red-700 hover:text-white transition-all "
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>CÓ THỂ BẠN CŨNG MUỐN XEM</p>
          </div>
          <SlideCard listFilm={listTheLoai.items} gap={10} />
        </div>

        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>PHIM MỚI CẬP NHẬT</p>
          </div>
          <SlideCard listFilm={PhimMoi.items} gap={10} />
        </div>
      </div>
    </div>
  );
}

export default PlayerVideo;
