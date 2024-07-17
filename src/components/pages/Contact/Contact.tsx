import ContactForm from "../../features/ContactForm/ContactForm";
import styles from "./Contact.module.scss";
import { useState } from "react";

const Contact: React.FC = () => {
  const [success, setSuccess] = useState(false);

  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
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
