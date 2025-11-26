import MusicPlayersList from "../../features/MusicPlayersList/MusicPlayersList";
import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import PhotoColumn from "../../features/PhotoColumn/PhotoColumn";
import { IMAGE_SRC } from "../../../config";
import styles from "./Music.module.scss";
import useTitle from "../../../hooks/useTitle";

const Music = () => {
  useTitle("Music");

  return (
    <section>
      <PageTitle title="Music" />
      <div className={styles.columns}>
        <PhotoColumn
          src={IMAGE_SRC("music.webp")}
          alt="Radosław Kurzeja playing a concert"
        />
        <MusicPlayersList />
      </div>
      <ScrollTopButton />
    </section>
  );
};

export default Music;
