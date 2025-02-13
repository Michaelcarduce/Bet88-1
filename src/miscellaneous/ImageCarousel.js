// import React, { useState } from "react";
// import "../styles/global.css";

// const ImageCarousel = () => {
//   return (
//     <section className="singleCompartment centeredVerticalLayout mt150spec">
//       <a href="#"><img className="img_fit" src="/assets/imageCarousel1.jpg" alt="Bet88 Logo" title="Bet88 Logo"/></a>
//     </section>
//   )
// }

// export default ImageCarousel

// import React, { useState, useEffect } from "react";
// import "../styles/global.css";

// const images = [
//   "/assets/imageCarousel1.jpg",
//   "/assets/imageCarousel2.jpg",
//   "/assets/imageCarousel3.jpg",
//   "/assets/imageCarousel4.jpg",
//   "/assets/imageCarousel5.jpg",
//   "/assets/imageCarousel6.jpg",
// ];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);

//   // Automatic image change every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [currentIndex]);

//   const handleNext = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsFading(false);
//     }, 500); // Sync with fade-out duration
//   };

//   const handlePrevious = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       );
//       setIsFading(false);
//     }, 500); // Sync with fade-out duration
//   };

//   const handleIndicatorClick = (index) => {
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setIsFading(false);
//     }, 500); // Sync with fade-out duration
//   };

//   return (
//     <section className="singleCompartment centeredVerticalLayout mt150spec">
//       <div className="carousel-container">
//         <button onClick={handlePrevious} className="carousel-btn left-btn">
//           {"<"}
//         </button>
//         <a href="#">
//           <img
//             className={`carousel-image ${
//               isFading ? "fade-out" : "fade-in pop-in"
//             }`}
//             src={images[currentIndex]}
//             alt="Carousel Image"
//             title="Carousel Image"
//           />
//         </a>
//         <button onClick={handleNext} className="carousel-btn right-btn">
//           {">"}
//         </button>
//       </div>
//       {/* Image Indicators */}
//       <div className="carousel-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === currentIndex ? "active" : ""}`}
//             onClick={() => handleIndicatorClick(index)}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageCarousel;

import React, { useState, useEffect } from "react";
import "../styles/global.css";

const images = [
  "/assets/imageCarousel1.webp",
  "/assets/imageCarousel2.webp",
  "/assets/imageCarousel3.webp",
  "/assets/imageCarousel4.webp",
  "/assets/imageCarousel5.webp",
  "/assets/imageCarousel6.webp",
];

const mobileImages = [
  "/assets/imageCarouselMobile1.webp",
  "/assets/imageCarouselMobile2.webp",
  "/assets/imageCarouselMobile3.webp",
  "/assets/imageCarouselMobile4.webp",
  "/assets/imageCarouselMobile5.webp",
  "/assets/imageCarouselMobile6.webp",
];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 200);
  };

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="singleCompartment centeredVerticalLayout mt150spec">
      <div className="carousel-container">
        <button onClick={handlePrevious} className="carousel-btn left-btn">
          {"<"}
        </button>
        <div className="carousel-image-container">
          <a href="#">
            <img
              className={`carousel-image ${
                isTransitioning ? "transition-out" : "transition-in"
              }`}
              src={isMobile ? mobileImages[currentIndex] : images[currentIndex]}
              alt="Carousel Image"
              title="Carousel Image"
            />
          </a>
        </div>
        <button onClick={handleNext} className="carousel-btn right-btn">
          {">"}
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}></button>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
