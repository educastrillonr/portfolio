import * as React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "@reach/router";

const Header: React.FC = () => {
  // const isActive: boolean = ({ isCurrent }: ) => {
  //   return isCurrent ? { style: "background: rgb(88, 164, 176);" } : null;
  // };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
      <nav>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about-me">About me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
