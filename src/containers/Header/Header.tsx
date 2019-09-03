import * as React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "@reach/router";

const getLinks = () => {
  return (
    <>
      <Link
        getProps={linkProps => ({
          className: linkProps.isCurrent ? styles.active : null
        })}
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        getProps={linkProps => ({
          className: linkProps.isCurrent ? styles.active : null
        })}
        to="/about-me"
      >
        About me
      </Link>
      <Link
        getProps={linkProps => ({
          className: linkProps.isCurrent ? styles.active : null
        })}
        to="/contact"
      >
        Contact
      </Link>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav>{getLinks()}</nav>
    </header>
  );
};

export default Header;
