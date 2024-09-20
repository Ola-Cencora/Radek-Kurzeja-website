import ArtBox from "../../common/ArtBox/ArtBox";
import { WorkData } from "../../pages/Gallery/galleryData";
import styles from "./GallerySet.module.scss";

type GallerySetProps = {
  title: string;
  works: WorkData[];
};

const GallerySet = ({ title, works }: GallerySetProps) => {
  return (
    <section className={styles.set}>
      <h2 className={styles.set__title}>{title}</h2>
      <article className={styles.set__grid}>
        {works.map((work) => (
          <ArtBox key={work.id} {...work} />
        ))}
      </article>
    </section>
  );
};

export default GallerySet;
