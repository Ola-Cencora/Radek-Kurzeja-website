import Navigation from "../../features/Navigation/Navigation";
import Logo from "../../common/Logo/Logo";
import { useState } from "react";
import styles from "./Home.module.scss";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  const [isNavShown, setIsNavShown] = useState<boolean>(false);

  const handleNavShown = () => {
    setIsNavShown(!isNavShown);
  };

  useTitle();

  return (
    <div className={styles.home}>
      <div className={styles.home__logo}>
        <Logo onClick={handleNavShown} alt="show navigation" />
      </div>
      <Navigation isNavShown={isNavShown} setIsNavShown={setIsNavShown} />
    </div>
  );
};

export default Home;
