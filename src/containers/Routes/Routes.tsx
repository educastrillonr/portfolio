import * as React from "react";
import { Router, Redirect } from "@reach/router";

const Routes: React.FC = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="/portfolio" />
    </Router>
  );
};

export default Routes;
