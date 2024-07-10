import { useState, useEffect } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import styles from "./Logo.module.scss";

interface LogoProps {
  alt?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ alt, onClick }) => {
  const isDesktop = useMediaQuery("(min-width: 62rem)");
  const [currentAlt, setCurrentAlt] = useState(alt);

  useEffect(() => {
    if (isDesktop) {
      setCurrentAlt("Radosław Kurzeja logo");
    } else {
      setCurrentAlt(alt);
    }
  }, [isDesktop, alt]);

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
