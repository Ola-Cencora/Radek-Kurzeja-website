import { Outlet } from "react-router-dom";
import Header from "../components/global/Header/Header";
import Footer from "../components/global/Footer/Footer";
import styles from "./RootLayout.module.scss";
import useScroll from "../hooks/useScroll";

const RootLayout = () => {
  useScroll();

  return (
    <div className={styles.root}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
