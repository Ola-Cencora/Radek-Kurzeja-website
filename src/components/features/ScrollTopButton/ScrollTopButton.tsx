import { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { GrLinkUp } from "react-icons/gr";
import styles from "./ScrollTopButton.module.scss";

const ScrollTopButton: React.FC = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scroll}>
      {showScrollTopButton && (
        <Button
          type="button"
          content={<GrLinkUp />}
          onClick={scrollTop}
          ariaLabel="go to the top of the page"
        />
      )}
    </div>
  );
};

export default ScrollTopButton;
