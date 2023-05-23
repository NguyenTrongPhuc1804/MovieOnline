import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import CardBanner from "../CardBanner/CardBanner";
import { useDispatch, useSelector } from "react-redux";

function SlideBanner(props) {
  const { filmNew } = props;
  const dispatch = useDispatch();
  // for (let i in filmNew) {
  //   console.log(filmNew[i]);
  // }

  const handleRenderCard = () => {
    return filmNew?.slice(1, filmNew.length).map((film, i) => (
      <SwiperSlide key={i}>
        <CardBanner film={film} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="w-full m-auto  ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        speed={500}
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
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        {handleRenderCard()}
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
