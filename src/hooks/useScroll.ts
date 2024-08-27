import { useEffect } from "react";

const useScroll = (id?: string) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);  
};

export default useScroll;
