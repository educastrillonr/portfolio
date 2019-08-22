import React from "react";
import "./App.css";
import Routes from "./containers/Routes/Routes";
import Header from "./containers/Header/Header";
import Social from "./containers/Social/Social";
// import Tile from "./components/Tile/Tile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Social />
        <Routes />
      </section>
    </div>
  );
};

export default App;
