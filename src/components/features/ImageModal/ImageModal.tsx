import styles from "./ImageModal.module.scss";

type ImageModalProps = {
  onClick: () => void;
  src: string;
  alt: string;
};

const ImageModal = ({ onClick, src, alt }: ImageModalProps) => (
  <div className={styles.modal} onClick={onClick}>
    <img className={styles.modal__img} src={src} alt={alt} />
  </div>
);

export default ImageModal;
