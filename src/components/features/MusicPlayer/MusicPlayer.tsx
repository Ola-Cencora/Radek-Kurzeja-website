import styles from "./MusicPlayer.module.scss";

interface MusicPlayerProps {
  title: string;
  src: string;
  href: string;
  albumTitle: string;
}
const MusicPlayer: React.FC<MusicPlayerProps> = ({
  title,
  src,
  href,
  albumTitle,
}) => {
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
