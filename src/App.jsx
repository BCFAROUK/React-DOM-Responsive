import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./compenents/About/About";
import Contact from "./compenents/Contact/Contact";
import Footer from "./compenents/Footer";
import Home from "./compenents/home/home";
import Login from "./compenents/login/Login";
import Signin from "./compenents/login/Signin";
import Nav from "./compenents/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
