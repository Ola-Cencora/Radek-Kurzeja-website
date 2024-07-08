import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
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
        className={styles.navigation__linkList}
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? styles.navigation__linkList__link___active
              : styles.navigation__linkList__link
          }
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? styles.navigation__linkList__link___active
              : styles.navigation__linkList__link
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive
              ? styles.navigation__linkList__link___active
              : styles.navigation__linkList__link
          }
        >
          Music
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? styles.navigation__linkList__link___active
              : styles.navigation__linkList__link
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
