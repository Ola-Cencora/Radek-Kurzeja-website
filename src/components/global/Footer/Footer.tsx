import MediaIcon from "../../common/MediaIcon/MediaIcon";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiBandcamp } from "react-icons/si";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div>
      <ul className={styles.footer__icons}>
        <MediaIcon
          href="https://www.instagram.com/algorytmfantastyczny/"
          name="go to Instagram"
          icon={<SiInstagram />}
        />
        <MediaIcon
          href="https://www.facebook.com/kurzeja.radoslaw/"
          name="go to Facebook"
          icon={<SiFacebook />}
        />
        <MediaIcon
          href="https://radoslaw-kurzeja.bandcamp.com/"
          name="go to Bandcamp"
          icon={<SiBandcamp />}
        />
      </ul>
    </div>
    <div className={styles.footer__copy}>
      <a href="https://www.linkedin.com/in/aleksandra-cencora/">
        design and code by Ola Cencora
      </a>
    </div>
  </footer>
);

export default Footer;
