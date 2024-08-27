import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import styles from "./RedirectLink.module.scss";

interface RedirectLinkProps {
  link: string;
  text: string;
  justify?: boolean;
}

const RedirectLink: React.FC<RedirectLinkProps> = ({ link, text, justify }) => (
  <Link to={link} className={justify ? styles.link___justify : styles.link}>
    <GrFormPreviousLink />
    {text}
  </Link>
);

export default RedirectLink;
