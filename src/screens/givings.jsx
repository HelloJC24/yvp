import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import {
  ArrowChevronLeftIcon,
  ArrowChevronRightIcon,
} from "../components/Icons";
import Loading from "../components/Loading";
import TitlteBar from "../components/TitlteBar";
import { GIVINGS_GALLERY_API } from "../config/constant";

const GivingsScreen = () => {
  const [images, setImages] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadGalleryData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(GIVINGS_GALLERY_API);
        console.log(res.data.data);
        setImages(res.data?.data);
        setYoutube(res.data?.youtube);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <TitlteBar title="Givings" />

      <main className="w-full p-4 sm:p-20">
        <h1 className="text-3xl text-primary font-bold text-center p-4">
          GALLERY
        </h1>

        <div className="w-full ">
          <ImageGallery images={images} youtube={youtube} />
        </div>
      </main>
    </div>
  );
};

const ImageGallery = ({ images, youtube }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const thumbnailsRef = useRef(null);
  const interval = 5000;

  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const thumbnail = container.children[currentIndex];

      if (thumbnail) {
        // Calculate scroll position without affecting main page
        const containerWidth = container.offsetWidth;
        const thumbnailLeft = thumbnail.offsetLeft;
        const thumbnailWidth = thumbnail.offsetWidth;

        // Set scroll position directly instead of using scrollIntoView
        container.scrollTo({
          left: thumbnailLeft - (containerWidth - thumbnailWidth) / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length]);

  // Thumbnail drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(thumbnailsRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2; // Adjust scroll speed
    thumbnailsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main Image */}
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex]?.url}
          alt={images[currentIndex]?.alt}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
        >
          <ArrowChevronLeftIcon size="30" fill="#fff" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
        >
          <ArrowChevronRightIcon size="30" fill="#fff" />
        </button>
      </div>

      {/* Thumbnails with drag scroll */}
      <div
        ref={thumbnailsRef}
        className={`flex space-x-2 overflow-x-auto pb-2 remove-scrollbar cursor-${
          isDragging ? "grabbing" : "grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-opacity ${
              currentIndex === index
                ? "border-2 border-primary"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={image?.url}
              alt={`Thumbnail ${image?.alt}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10">
        {youtube?.map((bleeh, item, index) => (
          <iframe
            key={index}
            className="w-full"
            width="560"
            height="315"
            src={bleeh.url}
            title={bleeh.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default GivingsScreen;
