import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

export default PageTitle;
