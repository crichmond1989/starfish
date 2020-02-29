import "../../styles/app.scss";
import "typeface-catamaran";
import "typeface-jura";
import "typeface-montserrat";

import React, { FC } from "react";
import { HashRouter } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Routes from "./Routes";

const App: FC = () => (
  <HashRouter>
    <Header />
    <main>
      <Routes />
    </main>
    <Footer />
  </HashRouter>
);

export default App;
