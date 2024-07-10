import styles from "./NavigationDesktop.module.scss";
import { NavLink } from "react-router-dom";

const NavigationDesktop: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navigation__linkList}>
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

export default NavigationDesktop;
