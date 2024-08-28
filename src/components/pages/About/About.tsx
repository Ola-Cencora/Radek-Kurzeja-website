import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import useScroll from "../../../hooks/useScroll";
import useTitle from "../../../hooks/useTitle";
import { ABOUT_TXT } from "./aboutTxt";
import { useState, useEffect } from "react";
import styles from "./About.module.scss";

const About: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    setParagraphs(ABOUT_TXT.split("\n"));
  }, []);

  useScroll();

  useTitle("About");

  return (
    <section className={styles.about}>
      <PageTitle title="About" />
      <div className={styles.about__txt}>
        {paragraphs.map((paragraph, index) => (
          <>
            <p key={index}>{paragraph}</p>
            <br />
          </>
        ))}
      </div>
      <ScrollTopButton />
    </section>
  );
};

export default About;
