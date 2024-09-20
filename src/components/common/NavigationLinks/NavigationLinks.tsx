import { NavLink } from "react-router-dom";
import { navigationLinksList } from "./navigationLinksList";
import styles from "./NavigationLinks.module.scss";

const NavigationLinks = () => {
  return (
    <>
      {navigationLinksList.map(({ id, page }) => (
        <NavLink
          key={id}
          to={`/${page}`}
          className={({ isActive }) =>
            isActive ? styles.link___active : styles.link
          }
        >
          {page}
        </NavLink>
      ))}
    </>
  );
};

export default NavigationLinks;
