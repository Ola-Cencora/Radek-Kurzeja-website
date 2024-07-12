import styles from "./FormInput.module.scss";

interface FormInputProps {
  id: string;
  type: string;
  name: string;
  required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ id, type, name, required }) => {
  return (
    <input
      className={styles.input}
      id={id}
      type={type}
      name={name}
      required={required}
      autoComplete="off"
    />
  );
};

export default FormInput;
