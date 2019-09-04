import * as React from "react";
import Tile from "../../components/Tile/Tile";
import styles from "./Tiles.module.scss";
import info from "../../static/data";
import { ITile } from "../../static/Interfaces/Interfaces";

const Tiles: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Featured</h2>
      <section className={styles.tilesLarge}>
        {info.featured.map((site: ITile, index: number) => (
          <Tile
            code={site.code}
            demo={site.demo}
            tags={site.tags}
            img={site.img}
            key={index}
            size={1}
          />
        ))}
      </section>
      <h2>Rest</h2>
      <section className={styles.tilesSmall}>
        {info.rest.map((site: ITile, index: number) => (
          <Tile
            code={site.code}
            demo={site.demo}
            tags={site.tags}
            img={site.img}
            key={index}
            size={2}
          />
        ))}
      </section>
    </section>
  );
};

export default Tiles;
