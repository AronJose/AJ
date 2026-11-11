import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactMe from "../Pages/ContactMe";
import Protfolio from '../Pages/Protfolio';

function index() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route id="#home" component={Home} />
            <Route id="#about" component={AboutUs} />
            <Route path="/portfolio" component={Protfolio} />
            <Route path="/contact" component={ContactMe} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default index;
