import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  page: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ page }) => {
  return (
    <NavLink
      to={`/${page}`}
      className={({ isActive }) =>
        isActive ? styles.link___active : styles.link
      }
    >
      {page}
    </NavLink>
  );
};

export default NavigationLink;
