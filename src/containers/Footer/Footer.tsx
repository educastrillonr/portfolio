import * as React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Built and designed by Eduardo Castrillón Romero</p>
    </footer>
  );
};

export default Footer;
