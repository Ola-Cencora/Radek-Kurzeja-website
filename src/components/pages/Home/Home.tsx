import Navigation from "../../features/Navigation/Navigation";
import Logo from "../../common/Logo/Logo";
import { useState } from "react";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const handleNavShown = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <main className={styles.home}>
      <div className={styles.home__logo}>
        <Logo onClick={handleNavShown} alt="show navigation" />
      </div>
      <Navigation isNavShown={isNavShown} setIsNavShown={setIsNavShown} />
    </main>
  );
};

export default Home;
