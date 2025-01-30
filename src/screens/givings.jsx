import React, { useEffect, useRef, useState } from "react";
import Img1 from "../assets/images/giving/img1.jpg";
import Img10 from "../assets/images/giving/img10.jpg";
import Img11 from "../assets/images/giving/img11.jpg";
import Img12 from "../assets/images/giving/img12.jpg";
import Img13 from "../assets/images/giving/img13.jpg";
import Img14 from "../assets/images/giving/img14.jpg";
import Img15 from "../assets/images/giving/img15.jpg";
import Img16 from "../assets/images/giving/img16.jpg";
import Img17 from "../assets/images/giving/img17.jpg";
import Img18 from "../assets/images/giving/img18.jpg";
import Img19 from "../assets/images/giving/img19.jpg";
import Img2 from "../assets/images/giving/img2.jpg";
import Img20 from "../assets/images/giving/img20.jpg";
import Img21 from "../assets/images/giving/img21.jpg";
import Img22 from "../assets/images/giving/img22.jpg";
import Img23 from "../assets/images/giving/img23.jpg";
import Img24 from "../assets/images/giving/img24.jpg";
import Img25 from "../assets/images/giving/img25.jpg";
import Img26 from "../assets/images/giving/img26.jpg";
import Img27 from "../assets/images/giving/img27.jpg";
import Img28 from "../assets/images/giving/img28.jpg";
import Img29 from "../assets/images/giving/img29.jpg";
import Img3 from "../assets/images/giving/img3.jpg";
import Img30 from "../assets/images/giving/img30.jpg";
import Img31 from "../assets/images/giving/img31.jpg";
import Img32 from "../assets/images/giving/img32.jpg";
import Img33 from "../assets/images/giving/img33.jpg";
import Img34 from "../assets/images/giving/img34.jpg";
import Img35 from "../assets/images/giving/img35.jpg";
import Img36 from "../assets/images/giving/img36.jpg";
import Img37 from "../assets/images/giving/img37.jpg";
import Img38 from "../assets/images/giving/img38.jpg";
import Img39 from "../assets/images/giving/img39.jpg";
import Img4 from "../assets/images/giving/img4.jpg";
import Img5 from "../assets/images/giving/img5.jpg";
import Img6 from "../assets/images/giving/img6.jpg";
import Img7 from "../assets/images/giving/img7.jpg";
import Img8 from "../assets/images/giving/img8.jpg";
import Img9 from "../assets/images/giving/img9.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

import {
  ArrowChevronLeftIcon,
  ArrowChevronRightIcon,
} from "../components/Icons";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const GivingsScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="Givings" />

      <main className="w-full p-6 sm:p-20">
        <h1 className="text-3xl text-primary font-bold text-center p-4">
          GALLERY
        </h1>

        <div className="w-full ">
          <ImageGallery />
        </div>
      </main>

      <StartConversation />

      <Footer />
    </div>
  );
};

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const thumbnailsRef = useRef(null);
  const interval = 5000;
  const images = [
    {
      id: 1,
      url: Img1,
      alt: "",
      thumbnail: Img1,
    },
    {
      id: 2,
      url: Img2,
      alt: "",
      thumbnail: Img2,
    },
    {
      id: 3,
      url: Img3,
      alt: "",
      thumbnail: Img3,
    },
    {
      id: 4,
      url: Img4,
      alt: "",
      thumbnail: Img4,
    },
    {
      id: 5,
      url: Img5,
      alt: "",
      thumbnail: Img5,
    },
    {
      id: 6,
      url: Img6,
      alt: "",
      thumbnail: Img6,
    },
    {
      id: 7,
      url: Img7,
      alt: "",
      thumbnail: Img7,
    },
    {
      id: 8,
      url: Img8,
      alt: "",
      thumbnail: Img8,
    },
    {
      id: 9,
      url: Img9,
      alt: "",
      thumbnail: Img9,
    },
    {
      id: 10,
      url: Img10,
      alt: "",
      thumbnail: Img10,
    },
    {
      id: 11,
      url: Img11,
      alt: "",
      thumbnail: Img11,
    },
    {
      id: 12,
      url: Img12,
      alt: "",
      thumbnail: Img12,
    },
    {
      id: 13,
      url: Img13,
      alt: "",
      thumbnail: Img13,
    },
    {
      id: 14,
      url: Img14,
      alt: "",
      thumbnail: Img14,
    },
    {
      id: 15,
      url: Img15,
      alt: "",
      thumbnail: Img15,
    },
    {
      id: 16,
      url: Img16,
      alt: "",
      thumbnail: Img16,
    },
    {
      id: 17,
      url: Img17,
      alt: "",
      thumbnail: Img17,
    },
    {
      id: 18,
      url: Img18,
      alt: "",
      thumbnail: Img18,
    },
    {
      id: 19,
      url: Img19,
      alt: "",
      thumbnail: Img19,
    },
    {
      id: 20,
      url: Img20,
      alt: "",
      thumbnail: Img20,
    },
    {
      id: 21,
      url: Img21,
      alt: "",
      thumbnail: Img21,
    },
    {
      id: 22,
      url: Img22,
      alt: "",
      thumbnail: Img22,
    },
    {
      id: 23,
      url: Img23,
      alt: "",
      thumbnail: Img23,
    },
    {
      id: 24,
      url: Img24,
      alt: "",
      thumbnail: Img24,
    },
    {
      id: 25,
      url: Img25,
      alt: "",
      thumbnail: Img25,
    },
    {
      id: 26,
      url: Img26,
      alt: "",
      thumbnail: Img26,
    },
    {
      id: 27,
      url: Img27,
      alt: "",
      thumbnail: Img27,
    },
    {
      id: 28,
      url: Img28,
      alt: "",
      thumbnail: Img28,
    },
    {
      id: 29,
      url: Img29,
      alt: "",
      thumbnail: Img29,
    },
    {
      id: 30,
      url: Img30,
      alt: "",
      thumbnail: Img30,
    },
    {
      id: 31,
      url: Img31,
      alt: "",
      thumbnail: Img31,
    },
    {
      id: 32,
      url: Img32,
      alt: "",
      thumbnail: Img32,
    },
    {
      id: 33,
      url: Img33,
      alt: "",
      thumbnail: Img33,
    },
    {
      id: 34,
      url: Img34,
      alt: "",
      thumbnail: Img34,
    },
    {
      id: 35,
      url: Img35,
      alt: "",
      thumbnail: Img35,
    },
    {
      id: 36,
      url: Img36,
      alt: "",
      thumbnail: Img36,
    },
    {
      id: 37,
      url: Img37,
      alt: "",
      thumbnail: Img37,
    },
    {
      id: 38,
      url: Img38,
      alt: "",
      thumbnail: Img38,
    },
    {
      id: 39,
      url: Img39,
      alt: "",
      thumbnail: Img39,
    },
  ];

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
    <div className="max-w-4xl mx-auto px-4">
      {/* Main Image */}
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
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
        className={`flex space-x-2 overflow-x-auto pb-2 gallery-scroll cursor-${
          isDragging ? "grabbing" : "grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-opacity ${
              currentIndex === index
                ? "border-2 border-primary"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
        <iframe
          className="w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BAbqDpCrmr4?si=mw-699Me1yyFI-xs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aVjpM54PFqU?si=Be1lNWFetLLCDtQi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default GivingsScreen;
