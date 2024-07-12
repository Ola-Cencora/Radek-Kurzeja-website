import ContactForm from "../../features/ContactForm/ContactForm";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <ContactForm />
    </section>
  );
};

export default Contact;
