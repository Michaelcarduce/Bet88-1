// import React, { useState, useEffect } from "react";

// const SlideAnimation = ({ children, slideDuration = 800 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true); // Set visibility after component mounts
//     }, slideDuration);
//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, [slideDuration]);

//   return (
//     <div className={isVisible ? "slideIn" : "slideHidden"}>{children}</div>
//   );
// };

// export default SlideAnimation;


////////

// import React, { useState, useEffect } from "react";

// const SlideComponent = ({ children, slideDuration = 800 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true); // Set visibility after component mounts
//     }, 100); // Slight delay before animation starts
//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, []);

//   return (
//     <div
//       className={isVisible ? "slideIn" : "slideHidden"}
//       style={{ transitionDuration: `${slideDuration}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// export default SlideComponent;

//////////

import React, { useState, useEffect, useRef } from "react";

const SlideComponent = ({ children, slideDuration = 800 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const elementHeight = rect.height;
        const scrollPosition = rect.top - windowHeight + elementHeight * 0.1; // 10% of element height

        if (scrollPosition < 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "slideIn" : "slideHidden"}
      style={{ transitionDuration: `${slideDuration}ms` }}
    >
      {children}
    </div>
  );
};

export default SlideComponent;

