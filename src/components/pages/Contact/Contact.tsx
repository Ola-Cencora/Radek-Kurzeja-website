import ContactForm from "../../features/ContactForm/ContactForm";
import PageTitle from "../../common/PageTitle/PageTitle";
import styles from "./Contact.module.scss";
import { useState } from "react";
import useTitle from "../../../hooks/useTitle";

const Contact = () => {
  const [success, setSuccess] = useState<boolean>(false);

  useTitle("Contact");

  return (
    <section className={styles.contact}>
      <PageTitle title="Contact" />
      {!success && <ContactForm setSuccess={setSuccess} />}
      {success && (
        <div className={styles.contact__success}>
          Thank you, the message has been sent!
        </div>
      )}
    </section>
  );
};

export default Contact;
