import { useParams } from "react-router";
import galleryData from "../Gallery/galleryData";
import NotFound from "../NotFound/NotFound";
import styles from "./SingleArt.module.scss";

const SingleArt: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const art = galleryData
    .flatMap((set) => set.works)
    .find((work) => work.id === id);

  if (!art) {
    return <NotFound />;
  }

  return (
    <section className={styles.artwork}>
      <h1 className={styles.artwork__title}>{art.title}</h1>
      <div className={styles.artwork__image}>
        <img
          className={styles.artwork__image___img}
          src={art.src}
          alt={art.title}
        />
      </div>
      <div className={styles.artwork__info}>
        <p>{art.date}</p>
        <p>{art.technique}</p>
        <p>{art.dimensions}</p>
      </div>
    </section>
  );
};

export default SingleArt;
