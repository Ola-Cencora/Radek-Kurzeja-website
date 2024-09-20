import Button from "../../common/Button/Button";
import Logo from "../../common/Logo/Logo";
import Navigation from "../../features/Navigation/Navigation";
import NavigationDesktop from "../../features/NavigationDesktop/NavigationDesktop";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [isNavShown, setIsNavShown] = useState<boolean>(false);
  const desktop = useMediaQuery("(min-width: 62rem)");

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
      </Link>
      <div className={styles.header__nav}>
        {!desktop && (
          <>
            <Button
              children={<IoMenuSharp />}
              onClick={handleNavShown}
              variant="navigation_btn"
              ariaLabel="show navigation"
            />
            <Navigation isNavShown={isNavShown} setIsNavShown={setIsNavShown} />
          </>
        )}
        {desktop && <NavigationDesktop />}
      </div>
    </header>
  );
};

export default Header;
