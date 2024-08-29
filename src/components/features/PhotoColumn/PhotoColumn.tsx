import styles from "./PhotoColumn.module.scss";

interface PhotoColumnProps {
  src: string;
  alt: string;
}

const PhotoColumn: React.FC<PhotoColumnProps> = ({ src, alt }) => (
  <div className={styles.photo}>
    <img src={src} alt={alt} className={styles.photo___img} />
  </div>
);

export default PhotoColumn;
