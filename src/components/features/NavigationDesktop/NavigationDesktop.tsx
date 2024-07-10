import styles from "./NavigationDesktop.module.scss";
import NavigationLink from "../../common/NavigationLink/NavigationLink";

const NavigationDesktop: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <NavigationLink page="about" />
        <NavigationLink page="gallery" />
        <NavigationLink page="music" />
        <NavigationLink page="contact" />
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
