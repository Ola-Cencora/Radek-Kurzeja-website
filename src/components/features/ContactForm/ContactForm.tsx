import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";
import Button from "../../common/Button/Button";
import FormField from "../../common/FormField/FormField";

type ContactFormProps = {
  setSuccess: (success: boolean) => void;
};

const ContactForm = ({ setSuccess }: ContactFormProps) => {
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

      <Button variant="send_btn" children="send" type="submit" />
    </form>
  );
};

export default ContactForm;
