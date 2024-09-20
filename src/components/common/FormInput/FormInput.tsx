import styles from "./FormInput.module.scss";

type FormInputProps = {
  id: string;
  type: string;
  name: string;
  required: boolean;
};

const FormInput = ({ id, type, name, required }: FormInputProps) => {
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
