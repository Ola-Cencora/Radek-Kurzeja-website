import { useState, useEffect } from "react";
import styles from "./Logo.module.scss";

interface LogoProps {
  alt?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ alt, onClick }) => {
  const [currentAlt, setCurrentAlt] = useState(alt);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 62rem)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setCurrentAlt("Radosław Kurzeja logo");
      } else {
        setCurrentAlt(alt);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [alt]);

  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/logo.svg`}
      alt={currentAlt}
      onClick={onClick}
      className={styles.image}
    />
  );
};

export default Logo;
