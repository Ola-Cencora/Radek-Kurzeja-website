import Button from "../../common/Button/Button";
import Logo from "../../common/Logo/Logo";
import Navigation from "../../features/Navigation/Navigation";
import NavigationDesktop from "../../features/NavigationDesktop/NavigationDesktop";
import { IoMenuSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isNavShown, setIsNavShown] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 62rem)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [desktop]);

  const handleNavShown = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <Logo />
        <h1 className={styles.header__logo___name}>
          Radosław <br />
          Kurzeja
        </h1>
      </Link>{" "}
      {!desktop && (
        <div>
          <Button
            content={<IoMenuSharp />}
            onClick={handleNavShown}
            variant="navigation_btn"
            ariaLabel="show navigation"
          />
          <Navigation isNavShown={isNavShown} setIsNavShown={setIsNavShown} />
        </div>
      )}
      {desktop && <NavigationDesktop />}
    </header>
  );
};

export default Header;
