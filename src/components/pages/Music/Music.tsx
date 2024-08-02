import MusicPlayersList from "../../features/MusicPlayersList/MusicPlayersList";
import styles from "./Music.module.scss";

const Music: React.FC = () => {
  return (
    <section>
      <h1>Music</h1>
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
