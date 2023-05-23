import SlideBanner from "../../components/SlideBanner/SlideBanner";
import SlideCard from "../../components/SlideCard/SlideCard";
import SlidePricing from "../../components/SlidePricing/SlidePricing";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getFilmHomePage,
  getPhimBo,
  getPhimHoatHinh,
  getPhimLe,
} from "../../redux/reducer/ManagementFilmSlice";
import CardBanner from "../../components/SlideBanner/CardBanner/CardBanner";
function Home() {
  const dispatch = useDispatch();
  const filmNew = useSelector((state) => state.ManagementFilmSlice.homeFilm);
  const PhimMoi = useSelector((state) => state.ManagementFilmSlice.PhimMoi);
  const PhimLe = useSelector((state) => state.ManagementFilmSlice.PhimLe);
  const PhimBo = useSelector((state) => state.ManagementFilmSlice.PhimBo);
  const HoatHinh = useSelector((state) => state.ManagementFilmSlice.HoatHinh);
  console.log(PhimLe);
  useEffect(() => {
    dispatch(getFilmHomePage());
    dispatch(getPhimLe());
    dispatch(getPhimBo());
    dispatch(getPhimHoatHinh());
  }, []);
  return (
    <div>
      <div className="mt-[5rem]">
        <SlideBanner listFilm={filmNew} gap={0} />
      </div>
      <SlideCard listFilm={PhimMoi.items} gap={0} />
      <div className="body px-[4%]">
        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>Phim Lẻ</p>
          </div>
          <SlideCard listFilm={PhimLe.items} gap={20} />
        </div>
        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>Phim Bộ</p>
          </div>
          <SlideCard listFilm={PhimBo.items} gap={10} />
        </div>
        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>Hoạt Hình</p>
          </div>
          <SlideCard listFilm={HoatHinh.items} gap={10} />
        </div>
      </div>
      <div className="mt-[80px]">
        <CardBanner film={filmNew[0]} />
      </div>
      <div className="mt-[80px]">
        <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
          <p className="text-center">FLIX PRICING</p>
        </div>
        <SlidePricing />
      </div>
    </div>
  );
}

export default Home;
