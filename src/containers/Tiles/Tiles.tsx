import * as React from "react";
import Tile from "../../components/Tile/Tile";
import styles from "./Tiles.module.scss";
import info from "../../static/data";
import { ITile } from "../../static/Interfaces/Interfaces";

// const smallTile = {
//   "grid-template-columns": "repeat(auto-fit, minmax(300px, 2fr));",
//   width: "300px"
// };

// const largeTile = {
//   "grid-template-columns": "repeat(auto-fit, minmax(600px, 2fr));",
//   width: "600px"
// };

const Tiles: React.FC = () => {
  return (
    <section className={styles.container}>
      <section className={styles.tilesLarge}>
        <h2>Featured</h2>
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
      <section className={styles.tilesSmall}>
        <h2>Rest</h2>
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
