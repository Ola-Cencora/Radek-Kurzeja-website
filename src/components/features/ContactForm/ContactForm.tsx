import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";
import Button from "../../common/Button/Button";
import FormField from "../../common/FormField/FormField";

interface ContactFormProps {
  setSuccess: (success: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setSuccess }) => {
  const [state, handleSubmit] = useForm("meojoebq");
  if (state.succeeded) setSuccess(true);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormField
        id="name"
        type="text"
        name="name"
        required={true}
        input="input"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <FormField
        id="email"
        type="email"
        name="email"
        required={true}
        input="input"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <FormField id="message" name="message" required={true} input="textarea" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button content="send" type="submit" />
    </form>
  );
};

export default ContactForm;
