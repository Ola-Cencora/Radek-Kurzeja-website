import ArtBox from "../../common/ArtBox/ArtBox";
import { WorkData } from "../../pages/Gallery/galleryData";

interface GallerySetProps {
  title: string;
  works: WorkData[];
}

const GallerySet: React.FC<GallerySetProps> = ({ title, works }) => {
  return (
    <article>
      <h2>{title}</h2>
      {works.map((work) => (
        <ArtBox key={work.id} {...work} />
      ))}
    </article>
  );
};

export default GallerySet;
