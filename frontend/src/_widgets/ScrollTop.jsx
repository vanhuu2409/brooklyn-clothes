import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", ScrollTop);
    };
  }, [pathname]);
  return null;
};

export default ScrollTop;
