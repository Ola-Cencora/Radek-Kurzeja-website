import { Outlet } from "react-router-dom";
import Header from "../components/global/Header/Header";
import Footer from "../components/global/Footer/Footer";
import styles from "./RootLayout.module.scss";

const RootLayout: React.FC = () => (
  <div className={styles.root}>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default RootLayout;
