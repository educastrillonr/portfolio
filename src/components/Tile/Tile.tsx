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
  render() {
    console.log(this.props.demo);

    return (
      <article className={styles.wrapper}>
        <img src="http://placekitten.com/g/300/169" alt="" />
        <div className={styles.overlay}>
          <Link to="#">demo</Link>
          <Link to="#">code</Link>
        </div>
      </article>
    );
  }
}

// const getLinks: React.FC = () => {
//   return <div className={styles.linksWrapper} />;
// };

export default Tile;
