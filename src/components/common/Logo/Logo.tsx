import useMediaQuery from "../../../hooks/useMediaQuery";
import { IMAGE_SRC } from "../../../config";
import styles from "./Logo.module.scss";

type LogoProps = {
  alt?: string;
  onClick?: () => void;
};

const Logo = ({ alt, onClick }: LogoProps) => {
  const isDesktop = useMediaQuery("(min-width: 62rem)");
  const currentAlt = isDesktop ? "Radosław Kurzeja logo" : alt;

  return (
    <img
      src={IMAGE_SRC("logo.svg")}
      alt={currentAlt}
      onClick={onClick}
      className={styles.image}
    />
  );
};

export default Logo;
