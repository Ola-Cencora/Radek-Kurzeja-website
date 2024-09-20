import styles from "./PhotoColumn.module.scss";

type PhotoColumnProps = {
  src: string;
  alt: string;
};

const PhotoColumn = ({ src, alt }: PhotoColumnProps) => (
  <div className={styles.photo}>
    <img src={src} alt={alt} className={styles.photo___img} />
  </div>
);

export default PhotoColumn;
