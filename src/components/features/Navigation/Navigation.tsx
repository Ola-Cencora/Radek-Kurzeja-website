import styles from "./Navigation.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import NavigationLink from "../../common/NavigationLink/NavigationLink";
import Button from "../../common/Button/Button";

interface NavigationProps {
  isNavShown: boolean;
  setIsNavShown: (state: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isNavShown,
  setIsNavShown,
}) => {
  return (
    <nav
      className={`${
        isNavShown ? styles.navigation___responsive : styles.navigation
      }`}
    >
      <Button
        onClick={() => setIsNavShown(false)}
        content={<IoCloseSharp />}
        ariaLabel="close navigation"
        variant="navigation_btn"
      />
      <ul
        onClick={() => setIsNavShown(false)}
        className={styles.navigation__list}
      >
        <NavigationLink page="about" />
        <NavigationLink page="gallery" />
        <NavigationLink page="music" />
        <NavigationLink page="contact" />
      </ul>
    </nav>
  );
};

export default Navigation;
