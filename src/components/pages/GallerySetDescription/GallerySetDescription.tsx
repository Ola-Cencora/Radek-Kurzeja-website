import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import galleryData from "../Gallery/galleryData";
import useTitle from "../../../hooks/useTitle";
import { useParams } from "react-router";
import NotFound from "../NotFound/NotFound";
import styles from "./GallerySetDescription.module.scss";
import { IMAGE_SRC } from "../../../config";

const GallerySetDescription = () => {
  const { name } = useParams<{ name: string }>();

  const gallerySet = galleryData.find((set) => set.id === name);

  useTitle(gallerySet?.gallerySetTitle ?? "Gallery");

  if (!gallerySet) return <NotFound />;

  const { gallerySetTitle, description, description_imgs } = gallerySet;

  return (
    <section className={styles.page}>
      <PageTitle title={gallerySetTitle} />
      {description?.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <div className={styles.page__imgs}>
        {description_imgs?.map((img, index) => (
          <div key={index} className={styles.page__imgs___wrapper}>
            <img src={IMAGE_SRC(img)} alt="Radosław Kurzeja" />
          </div>
        ))}
      </div>
      <ScrollTopButton />
    </section>
  );
};

export default GallerySetDescription;
