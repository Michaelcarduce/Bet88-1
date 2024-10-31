import React, { useState, useEffect, useRef } from "react";

const PopInAnimation = ({ children, popDuration = 800 }) => {
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
          setIsVisible(true); // Trigger pop-in when scrolled into view
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
      className={isVisible ? "popIn2" : "popHidden"}
      style={{ transitionDuration: `${popDuration}ms` }}
    >
      {children}
    </div>
  );
};

export default PopInAnimation;
