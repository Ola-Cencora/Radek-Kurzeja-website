import styles from "./MediaIcon.module.scss";

interface MediaIconProps {
  href: string;
  name: string;
  icon: React.ReactNode;
}

const MediaIcon: React.FC<MediaIconProps> = ({ href, name, icon }) => (
  <li>
    <a href={href} className={styles.link}>
      <span className={styles.link__name}>{name}</span>
      {icon}
    </a>
  </li>
);

export default MediaIcon;
