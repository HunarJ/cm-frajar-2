import { useState, useEffect, useRef } from "react";
export const useFadeAnmation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.2,
        }
      );
  
      const currentDiv = ref.current;
      if (currentDiv) {
        observer.observe(currentDiv);
      }
  
      return () => {
        if (currentDiv) {
          observer.unobserve(currentDiv);
        }
      };
    }, []);
  
    return {isVisible, ref}
}