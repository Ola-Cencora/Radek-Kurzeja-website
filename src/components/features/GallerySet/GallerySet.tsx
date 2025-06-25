import ArtBox from "../../common/ArtBox/ArtBox";
import { WorkData } from "../../pages/Gallery/galleryData";
import styles from "./GallerySet.module.scss";
import { Link } from "react-router-dom";

type GallerySetProps = {
  id: string;
  title: string;
  description_slug?: string;
  works: WorkData[];
};

const GallerySet = ({
  id,
  title,
  description_slug,
  works,
}: GallerySetProps) => {
  return (
    <section className={styles.set}>
      <h2 className={styles.set__title}>{title}</h2>
      {description_slug && (
        <Link to={`/gallery/series/${id}`}>
          <p className={styles.set__description}>{description_slug}</p>
        </Link>
      )}
      <article className={styles.set__grid}>
        {works.map((work) => (
          <ArtBox key={work.id} {...work} />
        ))}
      </article>
    </section>
  );
};

export default GallerySet;
