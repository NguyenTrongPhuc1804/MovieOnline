import CardBanner from "../../components/CardBanner/CardBanner";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import SlideCard from "../../components/SlideCard/SlideCard";
import SlidePricing from "../../components/SlidePricing/SlidePricing";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  getFilmHomePage,
  getFilmInfo,
} from "../../redux/reducer/ManagementFilmSlice";
function Home() {
  const dispatch = useDispatch();
  const filmNew = useSelector((state) => state.ManagementFilmSlice.homeFilm);

  useEffect(() => {
    dispatch(getFilmHomePage());
  }, []);
  return (
    <div>
      <div className="mt-[5rem]">
        <SlideBanner filmNew={filmNew} gap={0} />
      </div>
      <SlideCard filmNew={filmNew} gap={0} />
      <div className="body px-[4%]">
        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>LATEST MOVIES</p>
          </div>
          <SlideCard gap={10} />
        </div>
        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>LATEST MOVIES</p>
          </div>
          <SlideCard gap={10} />
        </div>
        <div className="mt-[80px]">
          <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
            <p>LATEST MOVIES</p>
          </div>
          <SlideCard gap={10} />
        </div>
      </div>
      <div className="mt-[80px]">
        <CardBanner />
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
