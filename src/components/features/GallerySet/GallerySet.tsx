import ArtBox from "../../common/ArtBox/ArtBox";

const GallerySet: React.FC = () => {
  //GallerySet odbiera dane o obrazach, używa tytułu, resztę przekazuje do ArtBox
  return (
    <article>
      <h2>gallery set title</h2>
      <ArtBox />
      <ArtBox />
      <ArtBox />
      <ArtBox />
    </article>
  );
};

export default GallerySet;
