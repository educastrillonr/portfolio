import * as React from "react";
import styles from "./Tile.module.scss";

export interface TileProps {}

export interface TileState {}

class Tile extends React.Component<TileProps, TileState> {
  // state = { :  }
  render() {
    return (
      <article className={styles.wrapper}>
        <img src="http://placekitten.com/g/300/169" alt="" />
      </article>
    );
  }
}

const getLinks: React.FC = () => {
  return <div className={styles.linksWrapper} />;
};

export default Tile;
