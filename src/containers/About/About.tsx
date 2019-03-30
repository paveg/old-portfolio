import React, { Component } from "react";
import styled from "styled-components";

const NoneUl = styled.ul`
  list-style: none;
`;

const birthDay = {
  date: 29,
  month: 12,
  year: 1991
};

class About extends Component {
  public render() {
    const profile = (
      <div>
        <h3>Profile</h3>
        <NoneUl>
          <li>Name: Ryota Ikezawa</li>
          <li>Age: {this.currentAge()}</li>
          <li>City: Tokyo / Japan</li>
          <li>Job: Software Development Engineer</li>
        </NoneUl>
      </div>
    );

    const englishBio = (
      <div>
        <p>
          Born in Tokyo, Japan in 1991. Ryota began his software development
          studies at 22 years old on my own.
          <br />
          The next year, he started to work at system-integrator. Mainly, he did
          network design and operation.
          <br />
          <br />
          After that, he joined{" "}
          <a href="https://corp.freee.co.jp/">freee k.k.</a> as a Software
          Development Engineer in 2015.
          <br />
          He engages product-oriented development work regardless of the
          frontend or backend technology domain.
          <br />
          As a sideline, he joined{" "}
          <a href="https://corp.acall.jp/">ACALL Inc.</a> in August 2018.
        </p>
      </div>
    );

    return (
      <div>
        <h2>About Me</h2>
        <h3>Biography</h3>
        {englishBio}
        {profile}
      </div>
    );
  }

  private currentAge = () => {
    const birthdate = new Date(
      birthDay.year,
      birthDay.month - 1,
      birthDay.date
    );
    const today = new Date();
    const thisYearBirthday = new Date(
      today.getFullYear(),
      birthdate.getMonth(),
      birthdate.getDate()
    );
    const age = today.getFullYear() - birthdate.getFullYear();

    return today < thisYearBirthday ? age - 1 : age;
  };
}

export default About as any;
