import PageTitle from "../../common/PageTitle/PageTitle";
import GallerySet from "../../features/GallerySet/GallerySet";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import galleryData from "./galleryData";
import useTitle from "../../../hooks/useTitle";

const Gallery = () => {
  useTitle("Gallery");

  return (
    <section>
      <PageTitle title="Gallery" />
      {galleryData.map(({ id, gallerySetTitle, works }) => (
        <GallerySet key={id} title={gallerySetTitle} works={works} />
      ))}
      <ScrollTopButton />
    </section>
  );
};

export default Gallery;
