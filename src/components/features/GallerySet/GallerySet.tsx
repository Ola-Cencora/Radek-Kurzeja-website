import ArtBox from "../../common/ArtBox/ArtBox";
import { WorkData } from "../../pages/Gallery/galleryData";
import styles from "./GallerySet.module.scss";

interface GallerySetProps {
  title: string;
  works: WorkData[];
}

const GallerySet: React.FC<GallerySetProps> = ({ title, works }) => {
  return (
    <article className={styles.set}>
      <h2 className={styles.set__title}>{title}</h2>
      <div className={styles.set__grid}>
        {works.map((work) => (
          <ArtBox key={work.id} {...work} />
        ))}
      </div>
    </article>
  );
};

export default GallerySet;
