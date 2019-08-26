import * as React from "react";
import styles from "./Tile.module.scss";

export interface TileProps {
  demo: string;
  code: string;
  tags: string[];
  img: string;
}

export interface TileState {}

class Tile extends React.Component<TileProps, TileState> {
  // state = { :  }

  getTags = () => {
    return (
      <div className={styles.tagsWrapper}>
        {this.props.tags.map((tag: string, index: number) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    );
  };

  getCode = () => {
    if (this.props.code !== "#") {
      return (
        <a target="_blank" href={this.props.code}>
          code
        </a>
      );
    }
  };

  render() {
    return (
      <article className={styles.wrapper}>
        <img src={this.props.img} alt="" />
        <div className={styles.overlay} />
        <div className={styles.linksWrapper}>
          <a target="_blank" href={this.props.demo}>
            demo
          </a>
          {this.getCode()}
        </div>
        {this.getTags()}
      </article>
    );
  }
}

export default Tile;
