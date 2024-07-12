import styles from "./FormTextarea.module.scss";

interface FormTextareaProps {
  id: string;
  name: string;
  required: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ id, name, required }) => {
  return (
    <textarea
      className={styles.textarea}
      id={id}
      name={name}
      required={required}
    />
  );
};

export default FormTextarea;
