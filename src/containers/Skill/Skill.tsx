import LapTopIcon from "@material-ui/icons/Laptop";
import React, { Component } from "react";
import styled from "styled-components";
import GolangIcon from "../../static/images/logos/golang.png";
import JsIcon from "../../static/images/logos/js.png";
import RailsIcon from "../../static/images/logos/rails.png";
import ReactIcon from "../../static/images/logos/react.png";
import RubyIcon from "../../static/images/logos/ruby.png";
import TsIcon from "../../static/images/logos/ts.png";

const NoneUl = styled.ul`
  list-style: none;
  line-height: 2em;
  font-size: 18px;
`;

const StyledImage = styled.img`
  width: auto;
  height: 18px;
  margin-right: 4px;
`;

class Skill extends Component {
  public render() {
    const partSkill = (
      <div>
        <h3>
          <LapTopIcon />
          {" " + "Programming Language and Framework"}
        </h3>
        <NoneUl>
          <li>
            <StyledImage src={RubyIcon} />
            Ruby
          </li>
          <li>
            <StyledImage src={RailsIcon} />
            Ruby On Rails
          </li>
          <li>
            <StyledImage src={GolangIcon} />
            golang
          </li>
          <li>
            <StyledImage src={JsIcon} />
            JavaScript
          </li>
          <li>
            <StyledImage src={TsIcon} />
            TypeScript
          </li>
          <li>
            <StyledImage src={ReactIcon} />
            React.js
          </li>
          <li>ShellScript</li>
        </NoneUl>
      </div>
    );
    return (
      <div>
        <h2>Skill</h2>
        {partSkill}
        <p>Welcome to Skill</p>
      </div>
    );
  }
}

export default Skill as any;
