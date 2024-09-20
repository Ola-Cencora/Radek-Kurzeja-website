import { useEffect } from "react";

const useTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} - Radosław Kurzeja` : "Radosław Kurzeja";
  }, [title]);
};

export default useTitle;
