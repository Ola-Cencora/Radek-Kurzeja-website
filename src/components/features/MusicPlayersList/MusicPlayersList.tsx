import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { albumsList } from "./albumsList";
import styles from "./MusicPlayersList.module.scss";

const MusicPlayersList = () => {
  return (
    <div className={styles.players}>
      {albumsList.map(({ id, albumTitle, title, src, href }) => (
        <MusicPlayer
          key={id}
          albumTitle={albumTitle}
          title={title}
          src={src}
          href={href}
        />
      ))}
    </div>
  );
};

export default MusicPlayersList;
