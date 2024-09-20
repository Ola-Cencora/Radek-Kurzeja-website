import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import styles from "./RedirectLink.module.scss";

type RedirectLinkProps = {
  link: string;
  children: React.ReactNode;
  justify?: boolean;
};

const RedirectLink = ({ link, children, justify }: RedirectLinkProps) => (
  <Link to={link} className={justify ? styles.link___justify : styles.link}>
    <GrFormPreviousLink />
    {children}
  </Link>
);

export default RedirectLink;
