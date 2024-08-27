import PageTitle from "../../common/PageTitle/PageTitle";
import useScroll from "../../../hooks/useScroll";
import useTitle from "../../../hooks/useTitle";

const About: React.FC = () => {
  useScroll();

  useTitle("About");

  return <PageTitle title="About" />;
};

export default About;
