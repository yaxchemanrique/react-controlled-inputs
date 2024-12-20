import { Github, Instagram } from "feather-icons-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.meshTitle}>
          <div>
            <object data="/inputs-title.svg"></object>
          </div>
          <address rel="author" className={styles.authorTag}>
            by Yaxche Manrique
          </address>
        </div>
        <ul>
          <li>
            <a href="https://github.com/yaxchemanrique/" target="_blank">
              <Github size={36} color="white" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yaxchemanrique/" target="_blank">
              <Instagram size={36} color="white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
