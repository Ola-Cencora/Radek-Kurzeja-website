import styles from "./PageTitle.module.scss";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => (
  <h1 className={styles.title}>{title}</h1>
);

export default PageTitle;
