import MusicPlayersList from "../../features/MusicPlayersList/MusicPlayersList";
import PageTitle from "../../common/PageTitle/PageTitle";
import styles from "./Music.module.scss";
import useScroll from "../../../hooks/useScroll";

const Music: React.FC = () => {
  useScroll();

  return (
    <section>
      <PageTitle title="Music" />
      <div className={styles.columns}>
        <div className={styles.columns__photo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/music.jpg`}
            alt="Radosław Kurzeja playing a concert"
            className={styles.columns__photo___img}
          />
        </div>
        <MusicPlayersList />
      </div>
    </section>
  );
};

export default Music;
