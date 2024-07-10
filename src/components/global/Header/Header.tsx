import Button from "../../common/Button/Button";
import Logo from "../../common/Logo/Logo";
import Navigation from "../../features/Navigation/Navigation";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isNavShown, setIsNavShown] = useState(false);

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
      <Button
        content={<IoMenuSharp />}
        onClick={handleNavShown}
        variant="navigation_btn"
        ariaLabel="show navigation"
      />
      <Navigation isNavShown={isNavShown} setIsNavShown={setIsNavShown} />
    </header>
  );
};

export default Header;
