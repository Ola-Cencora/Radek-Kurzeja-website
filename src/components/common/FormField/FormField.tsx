import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import styles from "./FormField.module.scss";

interface FormFieldProps {
  id: string;
  type?: string;
  name: string;
  required: boolean;
  input: "input" | "textarea";
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  name,
  required,
  input,
}) => {
  return (
    <div className={styles.field}>
      <FormLabel label={name} />
      {input === "input" && (
        <FormInput
          id={id}
          type={type as string}
          name={name}
          required={required}
        />
      )}
      {input === "textarea" && (
        <FormTextarea id={id} name={name} required={required} />
      )}
    </div>
  );
};

export default FormField;