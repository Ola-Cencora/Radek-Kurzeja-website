import { Outlet } from "react-router-dom";
import Header from "../components/global/Header/Header";
import Footer from "../components/global/Footer/Footer";

const RootLayout: React.FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RootLayout;
