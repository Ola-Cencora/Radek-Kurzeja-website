import { NavLink } from "react-router-dom";
import { navigationLinksList } from "./navigationLinksList";
import styles from "./NavigationLinks.module.scss";

const NavigationLinks = () => {
  return (
    <>
      {navigationLinksList.map(({ id, page }) => (
        <li key={id}>
          <NavLink
            to={`/${page}`}
            className={({ isActive }) =>
              isActive ? styles.link___active : styles.link
            }
          >
            {page}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavigationLinks;
