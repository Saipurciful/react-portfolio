
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";

function App() {

  return (
    <Router>
      <div>
        <Navbar />


        <Route exact path="/" component={Home} />


        <Route exact path="/About" component={About} />


        <Route exact path="/Contact" component={Contact} />

        <Route exact path="/Portfolio" component={Portfolio} />

        <Route exact path="/Resume" component={Resume} />

        <Footer />

      </div>
    </Router>

  )
}

export default App;
