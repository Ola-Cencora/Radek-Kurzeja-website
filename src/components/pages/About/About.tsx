import PageTitle from "../../common/PageTitle/PageTitle";
import useScroll from "../../../hooks/useScroll";

const About: React.FC = () => {
  useScroll();

  return <PageTitle title="About" />;
};

export default About;
