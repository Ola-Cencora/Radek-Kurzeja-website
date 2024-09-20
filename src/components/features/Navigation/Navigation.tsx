import styles from "./Navigation.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import NavigationLinks from "../../common/NavigationLinks/NavigationLinks";
import Button from "../../common/Button/Button";

type NavigationProps = {
  isNavShown: boolean;
  setIsNavShown: (state: boolean) => void;
};

const Navigation = ({ isNavShown, setIsNavShown }: NavigationProps) => {
  return (
    <nav
      className={
        isNavShown ? styles.navigation___responsive : styles.navigation
      }
    >
      <Button
        onClick={() => setIsNavShown(false)}
        children={<IoCloseSharp />}
        ariaLabel="close navigation"
        variant="navigation_btn"
      />
      <ul
        onClick={() => setIsNavShown(false)}
        className={styles.navigation__list}
      >
        <NavigationLinks />
      </ul>
    </nav>
  );
};

export default Navigation;
