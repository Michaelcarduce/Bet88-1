import { useEffect, useRef } from "react";

const usePopAnimation = (className = "popIn", threshold = 0.1) => {
  const elementRefs = useRef([]); // Store multiple refs

  useEffect(() => {
    const elements = elementRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className); // Add animation class
            observer.unobserve(entry.target); // Unobserve after animation
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el); // Observe each element
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el); // Clean up observers
      });
    };
  }, [className, threshold]);

  return elementRefs;
};

export default usePopAnimation;
