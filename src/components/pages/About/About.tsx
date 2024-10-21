import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import PhotoColumn from "../../features/PhotoColumn/PhotoColumn";
import useTitle from "../../../hooks/useTitle";
import { aboutTxt } from "./aboutTxt";
import { IMAGE_SRC } from "../../../config";
import styles from "./About.module.scss";

const About = () => {
  useTitle("About");

  return (
    <section>
      <PageTitle title="About" />
      <div className={styles.columns}>
        <PhotoColumn
          src={IMAGE_SRC("about.jpg")}
          alt="Radosław Kurzeja playing a concert"
        />
        <div className={styles.columns__txt}>
          {aboutTxt.map((paragraph, index) => (
            <>
              <p key={index}>{paragraph}</p>
              <br />
            </>
          ))}
        </div>
      </div>
      <ScrollTopButton />
    </section>
  );
};

export default About;
