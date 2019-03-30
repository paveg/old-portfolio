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

const CenterTable = styled.table`
  text-align: center;
`;

class Skill extends Component {
  public render() {
    const partSkill = (
      <div>
        <h3>
          <LapTopIcon />
          {" " + "Language and Framework"}
        </h3>
        <CenterTable>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Memo</th>
          </tr>
          <tr>
            <td>
              <StyledImage src={RubyIcon} />
            </td>
            <td>Ruby</td>
            <td>4 years</td>
            <td> - </td>
          </tr>
          <tr>
            <td>
              <StyledImage src={RailsIcon} />
            </td>
            <td>Rails</td>
            <td>4 years</td>
            <td> - </td>
          </tr>
          <tr>
            <td>
              <StyledImage src={GolangIcon} />
            </td>
            <td>golang</td>
            <td>half year</td>
            <td> - </td>
          </tr>
          <tr>
            <td>
              <StyledImage src={JsIcon} />
            </td>
            <td>JavaScript</td>
            <td>2 years</td>
            <td> - </td>
          </tr>
          <tr>
            <td>
              <StyledImage src={TsIcon} />
            </td>
            <td>TypeScript</td>
            <td>3 months</td>
            <td> - </td>
          </tr>
          <tr>
            <td>
              <StyledImage src={ReactIcon} />
            </td>
            <td>React.js</td>
            <td>half year</td>
            <td> - </td>
          </tr>
          <tr>
            <td>-</td>
            <td>ShellScript</td>
            <td>4 years</td>
            <td> - </td>
          </tr>
        </CenterTable>
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
