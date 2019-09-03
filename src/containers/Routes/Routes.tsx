import * as React from "react";
import { Router, Redirect } from "@reach/router";
import Tiles from "../Tiles/Tiles";
// import AboutMe from "../AboutMe/AboutMe";

const Routes: React.FC = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="/portfolio" />
      <Tiles path="/portfolio" />
      {/* <AboutMe path="/about-me" /> */}
    </Router>
  );
};

export default Routes;
