import * as React from "react";
import Tile from "../../components/Tile/Tile";
import styles from "./Tiles.module.scss";

const Tiles: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.wrapper}> */}
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />

      {/* </div> */}
    </section>
  );
};

export default Tiles;
