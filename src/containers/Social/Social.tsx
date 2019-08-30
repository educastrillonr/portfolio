import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import styles from "./Social.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import CV from "../../assets/CV";

library.add(faGithub, faLinkedin, faEnvelope, faDownload);

const Social: React.FC = () => {
  return (
    <aside className={styles.wrapper}>
      <a
        href="https://github.com/educastrillonr"
        title="Github"
        target="_blank"
      >
        <FontAwesomeIcon
          className={styles.icon}
          size="2x"
          icon={["fab", "github"]}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/edu-c-romero"
        title="Linkedin"
        target="_blank"
      >
        <FontAwesomeIcon
          className={styles.icon}
          size="2x"
          icon={["fab", "linkedin"]}
        />
      </a>
      <a
        href="mailto:educastrillonr@gmail.com"
        title="Send me an email!"
        target="_blank"
      >
        <FontAwesomeIcon
          className={styles.icon}
          size="2x"
          icon={["fas", "envelope"]}
        />
      </a>
      <a href={CV} title="Download CV" target="_blank">
        <FontAwesomeIcon
          className={styles.icon}
          size="2x"
          icon={["fas", "download"]}
        />
      </a>
    </aside>
  );
};

export default Social;
