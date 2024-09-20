import styles from "./MusicPlayer.module.scss";

type MusicPlayerProps = {
  title: string;
  src: string;
  href: string;
  albumTitle: string;
};

const MusicPlayer = ({ title, src, href, albumTitle }: MusicPlayerProps) => {
  return (
    <div className={styles.player}>
      <h2 className={styles.player__title}>{albumTitle}</h2>
      <iframe title={title} className={styles.player__box} src={src} seamless>
        <a href={href}>{title}</a>
      </iframe>
    </div>
  );
};

export default MusicPlayer;
