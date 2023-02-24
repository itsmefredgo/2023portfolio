import * as React from "react";
import { useInView } from "react-intersection-observer";
import slidesData from "<redux>/assets/JSONdata/projects.json";
import { RxDotFilled } from "react-icons/rx";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Slide = {
  title: string;
  description: string;
};

const Slides = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  let prevPrevSlideNumber: number =
    (currentIndex - 2 + slidesData.length) % slidesData.length;
  let prevSlideNumber: number =
    (currentIndex - 1 + slidesData.length) % slidesData.length;
  let currentSlideNumber: number = currentIndex;
  let nextSlideNumber: number = (currentIndex + 1) % slidesData.length;
  let nextNextSlideNumber: number = (currentIndex + 2) % slidesData.length;

  console.log(
    prevPrevSlideNumber,
    prevSlideNumber,
    currentSlideNumber,
    nextSlideNumber,
    nextNextSlideNumber
  );

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % slidesData.length);
  };

  const currentSlide = slidesData[currentIndex] as Slide;
  const prevSlide = slidesData[
    (currentIndex - 1 + slidesData.length) % slidesData.length
  ] as Slide;
  const nextSlide = slidesData[(currentIndex + 1) % slidesData.length] as Slide;

  return (
    <div className={`main-works ${contentInView ? "iv" : ""}`} ref={contentRef}>
      <div className="main-works-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              index == prevPrevSlideNumber ? "prev-prev-slide" : ""
            }${index == prevSlideNumber ? "prev-slide" : ""}${
              index == currentSlideNumber ? "current-slide" : ""
            }${index == nextSlideNumber ? "next-slide" : ""}${
              index == nextNextSlideNumber ? "next-next-slide" : ""
            }`}
          >
            <h1 className="slide-title">{index}</h1>
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-description">{slide.description}</p>
          </div>
        ))}
        <div className="main-works-status">
          <div className="main-works-status-buttons">
            <button className="prev-btn" onClick={handlePrevClick}>
              &#60;
            </button>
            <div className="main-works-status-dots">
              {slidesData.map((slide, index) => (
                <RxDotFilled
                  key={index}
                  className={index == currentIndex ? "current-dot" : ""}
                ></RxDotFilled>
              ))}
            </div>
            <button className="next-btn" onClick={handleNextClick}>
              &#62;
            </button>
          </div>
          <div className="main-works-link">
            <Link href="/archive" className="main-eduction-left-info-link">
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
