import * as React from "react";
import { Router, Redirect } from "@reach/router";
import Tiles from "../Tiles/Tiles";

const Routes: React.FC = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="/portfolio" />
      <Tiles path="/portfolio" />
    </Router>
  );
};

export default Routes;
