import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import styles from "./FormField.module.scss";

type FormFieldProps = {
  id: string;
  type?: "text" | "email";
  name: string;
  required: boolean;
  input: "input" | "textarea";
};

const FormField = ({ id, type, name, required, input }: FormFieldProps) => {
  return (
    <div className={styles.field}>
      <FormLabel id={id} label={name} />
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
