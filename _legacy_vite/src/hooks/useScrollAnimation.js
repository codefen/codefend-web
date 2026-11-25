import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (currentPage) => {
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        const offset = scrollY - currentPage;
  
        if (img1Ref.current && img2Ref.current) {
          const position = offset > 0 ? `${offset / 5}px` : "0px";
          img1Ref.current.style.top = position;
          img2Ref.current.style.bottom = position;
        }
      };
  
      const handleResize = () => {
        if (window.innerWidth <= 820) {
          window.removeEventListener("scroll", handleScroll);
        } else {
          window.addEventListener("scroll", handleScroll);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      handleResize(); // Llamar inicialmente para configurar el estado correcto
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, [scrollY, currentPage]);
  
    return { img1Ref, img2Ref };
  };