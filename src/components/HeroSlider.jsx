// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { heroSlides } from '../data/mock';
// import './HeroSlider.css';

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Stable function to go to the next slide
//   const goToNext = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500); // match animation duration
//   }, [isAnimating]);

//   // Stable function to go to the previous slide
//   const goToPrev = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500); // match animation duration
//   }, [isAnimating]);

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 6000);

//     return () => clearInterval(interval); // cleanup on unmount
//   }, [goToNext]);

//   return (
//     <section className="hero-slider">
//       {/* Slides */}
//       {heroSlides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
//           style={{ backgroundImage: `url(${slide.image})` }}
//         >
//           <div className="hero-overlay"></div>
//           <div className="hero-content">
//             <h1 className="hero-title">{slide.title}</h1>
//             <p className="hero-subtitle">{slide.subtitle}</p>
//             <Link to={slide.ctaLink} className="hero-btn">
//               {slide.ctaText}
//             </Link>
//           </div>
//         </div>
//       ))}

//       {/* Navigation buttons */}
//       <button
//         className="hero-nav hero-nav-prev"
//         onClick={goToPrev}
//         aria-label="Previous Slide"
//       >
//         <ChevronLeft size={40} />
//       </button>
//       <button
//         className="hero-nav hero-nav-next"
//         onClick={goToNext}
//         aria-label="Next Slide"
//       >
//         <ChevronRight size={40} />
//       </button>

//       {/* Slide dots */}
//       <div className="hero-dots">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             className={`hero-dot ${index === currentSlide ? 'hero-dot-active' : ''}`}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;
import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/corporate-office.mp4";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <section className="hero-video-wrapper">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
        Custom Software, AI Integration & Digital Solutions — Built in Pakistan, Trusted Worldwide
        </h1>

        <p className="hero-subtitle">
          QllmSoft build secure, scalable enterprise web applications, internal
          business systems, and high‑performance APIs for teams in Pakistan,& Worldwide.
        </p>

        <Link to="/asp-net-core-development-pakistan" className="hero-btn">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default HeroSlider;
