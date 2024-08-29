import MusicPlayersList from "../../features/MusicPlayersList/MusicPlayersList";
import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import PhotoColumn from "../../features/PhotoColumn/PhotoColumn";
import styles from "./Music.module.scss";
import useScroll from "../../../hooks/useScroll";
import useTitle from "../../../hooks/useTitle";

const Music: React.FC = () => {
  useScroll();
  useTitle("Music");

  return (
    <section>
      <PageTitle title="Music" />
      <div className={styles.columns}>
        <PhotoColumn
          src={`${process.env.PUBLIC_URL}/images/music.jpg`}
          alt="Radosław Kurzeja playing a concert"
        />
        <MusicPlayersList />
      </div>
      <ScrollTopButton />
    </section>
  );
};

export default Music;
