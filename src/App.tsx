import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Home from "./containers/Home/Home";
import Works from "./containers/Works/Works";

class App extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    );
  }
}

export default App;
