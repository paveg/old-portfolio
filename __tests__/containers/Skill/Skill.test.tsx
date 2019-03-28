import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Skill from "./../../../src/containers/Skill/Skill";

configure({ adapter: new Adapter() });

describe("Skill", () => {
  it("renders without crashing", () => {
    shallow(<Skill />);
  });
});
