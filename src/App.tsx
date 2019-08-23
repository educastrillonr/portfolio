import React from "react";
import "./App.css";
import Routes from "./containers/Routes/Routes";
import Header from "./containers/Header/Header";
import Social from "./containers/Social/Social";
import Footer from "./containers/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Social />
        <Routes />
      </section>
      <Footer />
    </div>
  );
};

export default App;
