import PageTitle from "../../common/PageTitle/PageTitle";
import GallerySet from "../../features/GallerySet/GallerySet";

const Gallery: React.FC = () => {
  //gallery pobiera dane z pliku json, przekazuje je do GallerySet
  return (
    <section>
      <PageTitle title="Gallery" />
      <GallerySet />
      <GallerySet />
      <GallerySet />
    </section>
  );
};

export default Gallery;
