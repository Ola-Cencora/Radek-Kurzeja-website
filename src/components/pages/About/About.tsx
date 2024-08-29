import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import PhotoColumn from "../../features/PhotoColumn/PhotoColumn";
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
    <section>
      <PageTitle title="About" />
      <div className={styles.columns}>
        <PhotoColumn
          src={`${process.env.PUBLIC_URL}/images/music.jpg`}
          alt="Radosław Kurzeja playing a concert"
        />
        <div className={styles.columns__txt}>
          {paragraphs.map((paragraph, index) => (
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
