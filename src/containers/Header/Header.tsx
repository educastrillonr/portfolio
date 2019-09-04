import * as React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Social from "../Social/Social";
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
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <section className={styles.main}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <nav>{getLinks()}</nav>
      </section>
      <Social />
    </header>
  );
};

export default Header;
