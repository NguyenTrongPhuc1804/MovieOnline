import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import CardBanner from "../CardBanner/CardBanner";

function SlideBanner() {
  return (
    <div className="w-full m-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //   },
        // }}
        //         navigation
        //         pagination={{ clickable: true }}
        //         scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardBanner />
        </SwiperSlide>
        <SwiperSlide>
          <CardBanner />
        </SwiperSlide>
        <div className="swiper-button-prev after:content-none text-sm transition h-[100px]  w-[100px] ">
          <i className="fa-solid fa-chevron-left text-3xl text-white hover:text-red-700 transition-all"></i>
        </div>
        <div className="swiper-button-next after:content-none text-sm transition h-[100px]  w-[100px] ">
          <i className="fa-solid fa-chevron-right text-3xl text-white hover:text-red-700 transition-all"></i>
        </div>
      </Swiper>
    </div>
  );
}

export default SlideBanner;
