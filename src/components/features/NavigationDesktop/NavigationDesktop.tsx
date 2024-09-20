import styles from "./NavigationDesktop.module.scss";
import NavigationLinks from "../../common/NavigationLinks/NavigationLinks";

const NavigationDesktop = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <NavigationLinks />
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
