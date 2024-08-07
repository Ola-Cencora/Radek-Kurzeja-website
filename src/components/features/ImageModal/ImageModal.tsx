import styles from "./ImageModal.module.scss";

interface ImageModalProps {
  onClick: () => void;
  src: string;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ onClick, src, alt }) => (
  <div className={styles.modal} onClick={onClick}>
    <img className={styles.modal__img} src={src} alt={alt} />
  </div>
);

export default ImageModal;
