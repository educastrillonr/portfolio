import * as React from "react";
import Tile from "../../components/Tile/Tile";
import styles from "./Tiles.module.scss";
import info from "../../static/data";
import { TileProps } from "../../components/Tile/Tile";

const Tiles: React.FC = () => {
  return (
    <section className={styles.container}>
      {info.map((site: TileProps, index: number) => (
        <Tile
          code={site.code}
          demo={site.demo}
          tags={site.tags}
          img={site.img}
          key={index}
        />
      ))}
    </section>
  );
};

export default Tiles;
