import ContactForm from "../../features/ContactForm/ContactForm";
import styles from "./Contact.module.scss";
import { useState } from "react";

const Contact: React.FC = () => {
  const [success, setSuccess] = useState(false);
  console.log(success);

  return (
    <section className={styles.contact}>
      <ContactForm setSuccess={setSuccess} />
      {success && <div>udało się</div>}
    </section>
  );
};

export default Contact;
