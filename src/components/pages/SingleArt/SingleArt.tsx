import { useParams } from "react-router";
import galleryData from "../Gallery/galleryData";

const SingleArt: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const art = galleryData
    .flatMap((set) => set.works)
    .find((work) => work.id === id);

  if (!art) {
    return <div>No such artwork</div>;
  }

  return (
    <div>
      <h1>{art.title}</h1>
      <p>technique: {art.technique}</p>
      <p>dimensions: {art.dimensions}</p>
      <p>date: {art.date}</p>
      <img src={art.src} alt={art.title} />
    </div>
  );
};

export default SingleArt;
