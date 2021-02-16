
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from './components/pages/about/About';
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import Contact from "./components/pages/contact/Contact";
import Resume from "./components/pages/resume/Resume";
import Portfolio from "./components/pages/portfolio/Portfolio";



function App() {

  return (
    <Router>
      <div>
        <Navbar />



        <Route exact path="/" component={Home} />


        <Route exact path="/About" component={About} />


        <Route exact path="/contact" component={Contact} />

        <Route exact path="/Portfolio" component={Portfolio} />

        <Route exact path="/Resume" component={Resume} />


        <Footer />

      </div>
    </Router>

  )
}

export default App;
