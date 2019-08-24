import * as React from "react";
import styles from "./Tile.module.scss";
import { Link } from "@reach/router";

export interface TileProps {
  demo: string;
  code: string;
  tags: string[];
  img: string;
}

export interface TileState {}

class Tile extends React.Component<TileProps, TileState> {
  // state = { :  }

  getLinks = () => {
    return (
      <div className={styles.tagsWrapper}>
        {this.props.tags.map((tag: string, index: number) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    );
  };

  render() {
    return (
      <article className={styles.wrapper}>
        <img src="http://placekitten.com/g/300/169" alt="" />
        <div className={styles.overlay}></div>
        <div className={styles.linksWrapper}>
          <Link to="#">demo</Link>
          <Link to="#">code</Link>
        </div>
        {this.getLinks()}
      </article>
    );
  }
}

export default Tile;
