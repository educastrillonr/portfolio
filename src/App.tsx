import React from "react";
import "./App.scss";
import Routes from "./containers/Routes/Routes";
import Header from "./containers/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Routes />
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
