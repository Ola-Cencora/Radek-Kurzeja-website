import PageTitle from "../../common/PageTitle/PageTitle";
import GallerySet from "../../features/GallerySet/GallerySet";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import galleryData from "./galleryData";
import useScroll from "../../../hooks/useScroll";
import useTitle from "../../../hooks/useTitle";

const Gallery: React.FC = () => {
  useScroll();
  useTitle("Gallery");

  return (
    <section>
      <PageTitle title="Gallery" />
      {galleryData.map(({ setTitle, works }) => (
        <GallerySet key={setTitle} title={setTitle} works={works} />
      ))}
      <ScrollTopButton />
    </section>
  );
};

export default Gallery;
