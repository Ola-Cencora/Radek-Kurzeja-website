import { Link } from "react-router-dom";
import { WorkData } from "../../pages/Gallery/galleryData";

const ArtBox: React.FC<WorkData> = ({ id, title, src }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Link to={id}>
        <img src={src} alt={title} />
      </Link>
    </div>
  );
};

export default ArtBox;
