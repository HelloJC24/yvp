import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { REVIEWS_API } from "../config/constant";
import { ArrowChevronLeftIcon, ArrowChevronRightIcon, StarIcon } from "./Icons";
// Import Swiper styles
import "swiper/css";
import { useWindowSize } from "./Header";

// Review Card Subcomponent
const ReviewCard = ({ name, image, alt, review, ratings }) => (
  <div className="bg-white p-6 rounded-lg shadow-md w-full sm:mni-w-96 h-60 border border-slate-200 flex flex-col justify-center items-center">
    <div className="flex flex-col gap-y-2 items-center ">
      <img
        src={image}
        alt={alt}
        className="w-14 h-14 rounded-full bg-white object-cover"
      />
      <div>
        <p className="font-semibold text-xl">{name}</p>
      </div>
    </div>
    <div className="flex mb-2 gap-x-1 py-2">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          size={20}
          fill={i < parseInt(ratings) ? "#eab308" : "#ccc"}
        />
      ))}
    </div>
    <p className="text-sm text-gray-700 flex-grow text-center p-2">{review}</p>
    <img
      src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
      alt="Google logo"
      className="w-6 h-6 mr-2"
    />
  </div>
);

// Main Google Reviews Component
const GoogleReviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { width, height } = useWindowSize();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const res = await axios.get(REVIEWS_API);
        setReviews(res?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadReviews();
  }, []);

  const responsive =
    width < 600 ? 1 : width > 600 && reviews.length > 3 ? 3 : 2;
  return (
    <div className="max-w-6xl mx-auto relative">
      <div>
        <button
          ref={prevRef}
          className="absolute -left-5 top-1/2 -translate-y-1/2 shadow-md bg-white p-2 rounded-full transition-colors z-50"
        >
          <ArrowChevronLeftIcon size="25" fill="#333" />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-5  top-1/2 -translate-y-1/2 shadow-md bg-white p-2 rounded-full transition-colors z-50"
        >
          <ArrowChevronRightIcon size="25" fill="#333" />
        </button>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: { slidesPerView: responsive, slidesPerGroup: responsive }, // Tablets and above
          0: { slidesPerView: 1, slidesPerGroup: 1 }, // Mobile screens
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="swiper"
      >
        {reviews?.map((review, index) => (
          <SwiperSlide key={index} className="row">
            <ReviewCard
              name={review.name}
              image={review.image}
              ratings={review.ratings}
              review={review.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GoogleReviews;
