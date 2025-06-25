import PageTitle from "../../common/PageTitle/PageTitle";
import ScrollTopButton from "../../features/ScrollTopButton/ScrollTopButton";
import galleryData from "../Gallery/galleryData";
import useTitle from "../../../hooks/useTitle";
import { useParams } from "react-router";
import NotFound from "../NotFound/NotFound";

const GallerySetDescription = () => {
  const { name } = useParams<{ name: string }>();

  const gallerySet = galleryData.find((set) => set.id === name);

  useTitle(gallerySet?.gallerySetTitle ?? "Gallery");

  if (!gallerySet) return <NotFound />;

  const { gallerySetTitle, description } = gallerySet;

  return (
    <section>
      <PageTitle title={gallerySetTitle} />
      <p>{description}</p>
      <ScrollTopButton />
    </section>
  );
};

export default GallerySetDescription;
