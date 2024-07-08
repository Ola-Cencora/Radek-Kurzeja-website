import Navigation from "../../features/Navigation/Navigation";
import { useState } from "react";

const Home: React.FC = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const handleNavShown = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <>
      <h1 onClick={handleNavShown}>tu będzie logo</h1>
      <Navigation isNavShown={isNavShown} setIsNavShown={setIsNavShown} />
    </>
  );
};

export default Home;
