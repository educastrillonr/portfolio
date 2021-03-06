import * as React from "react";
import { ITile } from "../../static/Interfaces/Interfaces";
import styles from "./Tile.module.scss";

export interface TileState {}

class Tile extends React.Component<ITile, TileState> {
  // state = { :  }

  getTags = () => {
    return (
      <ul className={styles.tagsWrapper}>
        {this.props.tags.map((tag: string, index: number) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  };

  getCode = () => {
    if (this.props.code !== "#") {
      return (
        <a target="_blank" rel="noopener noreferrer" href={this.props.code}>
          code
        </a>
      );
    }
  };

  getDemo = () => {
    if (this.props.demo !== "#") {
      return (
        <a target="_blank" rel="noopener noreferrer" href={this.props.demo}>
          demo
        </a>
      );
    }
  };

  render() {
    const size =
      this.props.size === 2
        ? { maxWidth: "300px", maxHeight: (300 / 16) * 9 + "px" }
        : undefined;

    return (
      <article className={styles.wrapper} style={size}>
        <img src={this.props.img} alt="" />
        <div className={styles.overlay} />
        <div className={styles.linksWrapper}>
          {this.getDemo()}
          {this.getCode()}
        </div>
        {this.getTags()}
      </article>
    );
  }
}

export default Tile;
