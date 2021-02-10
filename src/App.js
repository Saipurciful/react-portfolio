// import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, About, Contact, Portfolio, Resume } from "./components/pages"
import Navbar from "./components/pages/Navbar"

function App() {

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
