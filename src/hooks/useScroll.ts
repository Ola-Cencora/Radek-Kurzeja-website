import { useEffect } from "react";
import { useLocation } from "react-router";

const useScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  
};

export default useScroll;
