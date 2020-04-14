import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

import store from "./redux/store";
import { Provider } from "react-redux";

class App extends Component {
  componentDidMount() {
    const sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
