import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./Social.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub);

const Social: React.FC = () => {
  return (
    <aside className={styles.wrapper}>
      <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
      <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
      <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
      <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
    </aside>
  );
};

export default Social;
