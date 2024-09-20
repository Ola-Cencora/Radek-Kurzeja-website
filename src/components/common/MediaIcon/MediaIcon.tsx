import styles from "./MediaIcon.module.scss";

type MediaIconProps = {
  href: string;
  name: string;
  icon: React.ReactNode;
};

const MediaIcon = ({ href, name, icon }: MediaIconProps) => (
  <li>
    <a href={href} className={styles.link}>
      <span className={styles.link__name}>{name}</span>
      {icon}
    </a>
  </li>
);

export default MediaIcon;
