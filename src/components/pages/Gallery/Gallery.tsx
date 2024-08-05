import PageTitle from "../../common/PageTitle/PageTitle";
import GallerySet from "../../features/GallerySet/GallerySet";
import galleryData from "./galleryData";

const Gallery: React.FC = () => {
  return (
    <section>
      <PageTitle title="Gallery" />
      {galleryData.map(({ setTitle, works }) => (
        <GallerySet key={setTitle} title={setTitle} works={works} />
      ))}
    </section>
  );
};

export default Gallery;
