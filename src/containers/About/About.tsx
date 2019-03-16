import React, { Component } from "react";
import "./About.css";

class About extends Component {
  public render() {
    return (
      <div>
        <div className={"about-box"}>
          <h2 title="Ryota Ikezawa">About Me</h2>
          <div className={"profile"}>
            <h3>Profile</h3>
            <ul className={"profile-ul"}>
              <li>Name: Ryota Ikezawa - pav</li>
              <li>Birthday: 29/12/1991</li>
              <li>City: Tokyo / Japan</li>
              <li>Job: Software Development Engineer</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About as any;
