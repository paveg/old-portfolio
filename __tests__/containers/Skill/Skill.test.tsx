import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Skill from "./../../../src/containers/Skill/Skill";

configure({ adapter: new Adapter() });

describe("Skill", () => {
  it("renders without crashing", () => {
    shallow(<Skill />);
  });

  it("has elements", () => {
    const h2Tag = shallow(<Skill />).find("h2");

    expect(h2Tag.text()).toEqual("Skill");
  });
});
