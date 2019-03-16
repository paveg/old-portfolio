import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Works from "./containers/Works/Works";
import BigAvatar from "./components/BigAvatar";

const MainDiv = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  background: #ffffff;
  border-radius: 10px;
`;

class App extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <BigAvatar />
        <MainDiv>
          <Switch>
            <Route exact={true} path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </MainDiv>
      </div>
    );
  }
}

export default App;
