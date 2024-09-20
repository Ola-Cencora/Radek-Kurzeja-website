import styles from "./FormTextarea.module.scss";

type FormTextareaProps = {
  id: string;
  name: string;
  required: boolean;
};

const FormTextarea = ({ id, name, required }: FormTextareaProps) => {
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
