import { Link } from "react-router-dom";
import { WorkData } from "../../pages/Gallery/galleryData";
import styles from "./ArtBox.module.scss";

const ArtBox = ({ id, title, src }: WorkData) => {
  return (
    <Link className={styles.box} to={id}>
      <img className={styles.box__img} src={src} alt={title} />
      <div className={styles.box__img__overlay}>
        <h3 className={styles.box__img__title}>{title}</h3>
      </div>
    </Link>
  );
};

export default ArtBox;
