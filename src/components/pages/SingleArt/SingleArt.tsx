import { useParams, useNavigate } from "react-router";
import galleryData from "../Gallery/galleryData";
import NotFound from "../NotFound/NotFound";
import ImageModal from "../../features/ImageModal/ImageModal";
import Button from "../../common/Button/Button";
import RedirectLink from "../../common/RedirectLink/RedirectLink";
import styles from "./SingleArt.module.scss";
import { useState } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import useTitle from "../../../hooks/useTitle";

const SingleArt = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const gallerySet = galleryData.find((set) =>
    set.works.some((work) => work.id === id)
  );
  const artIndex = gallerySet?.works.findIndex((work) => work.id === id);

  const title =
    gallerySet && artIndex !== undefined && artIndex !== -1
      ? gallerySet.works[artIndex].title
      : "";

  useTitle(title);

  if (!gallerySet || artIndex === undefined || artIndex === -1)
    return <NotFound />;

  const art = gallerySet.works[artIndex];
  const prevArt = gallerySet.works[artIndex - 1];
  const nextArt = gallerySet.works[artIndex + 1];

  const handlePrev = () => {
    if (prevArt) navigate(`/gallery/${prevArt.id}`);
  };

  const handleNext = () => {
    if (nextArt) navigate(`/gallery/${nextArt.id}`);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.buttons}>
        <Button
          children={<GrFormPreviousLink />}
          onClick={handlePrev}
          ariaLabel="see previous artwork"
          disabled={!prevArt}
        />
        <Button
          children={<GrFormNextLink />}
          onClick={handleNext}
          ariaLabel="see next artwork"
          disabled={!nextArt}
        />
      </div>
      <div className={styles.artwork}>
        <h1 className={styles.artwork__title}>{art.title}</h1>
        {showModal && (
          <ImageModal
            onClick={() => setShowModal(false)}
            src={art.src}
            alt={art.title}
          />
        )}
        <div className={styles.artwork__image}>
          <img
            className={styles.artwork__image___img}
            src={art.src}
            alt={art.title}
            onClick={() => setShowModal(true)}
            loading="lazy"
          />
        </div>
        <div className={styles.artwork__info}>
          <p>{art.date}</p>
          <p>{art.technique}</p>
          <p>{art.dimensions}</p>
        </div>
        <RedirectLink link="/gallery" children="go back to gallery" />
      </div>
    </section>
  );
};

export default SingleArt;
