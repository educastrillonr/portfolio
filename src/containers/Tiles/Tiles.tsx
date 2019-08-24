import * as React from "react";
import Tile from "../../components/Tile/Tile";
import styles from "./Tiles.module.scss";
import info from "../../static/data";
import { TileProps } from "../../components/Tile/Tile";

// const Props: TileProps = {
//   demo: "hola",
//   code: "jifrj",
//   tags: ["1", "2"]
// };

const Tiles: React.FC = () => {
  // console.log(Props);

  return (
    <section className={styles.container}>
      {/* <Tile code={info[0].code} demo={info[0].demo} tags={info[0].tags} /> */}
      {info.map((site: TileProps, index: number) => (
        <Tile code={site.code} demo={site.demo} tags={site.tags} key={index} />
      ))}
    </section>
  );
};

export default Tiles;
