import { Link } from "react-router-dom";

const ArtBox: React.FC = () => {
  //ArtBox odbiera dane o pojedynczym obrazie i wyświetla: obraz, tytuł oraz przenosi do odpowiedniej podstrony
  return (
    <div>
      <h3>single art title</h3>
      <Link to="1">
        <p>image, title on hover</p>
      </Link>
    </div>
  );
};

export default ArtBox;
