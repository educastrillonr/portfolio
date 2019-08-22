import * as React from "react";
import { Router, Redirect } from "@reach/router";
import Tile from "../../components/Tile/Tile";

const Routes: React.FC = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="/portfolio" />
      <Tile path="portfolio" />
    </Router>
  );
};

export default Routes;
