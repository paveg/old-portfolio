import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import About from "./../../../src/containers/About/About";

configure({ adapter: new Adapter() });

describe("About", () => {
  it("renders without crashing", () => {
    shallow(<About />);
  });

  it("equals h2 text", () => {
    const h2Tag = shallow(<About />).find("h2");
    expect(h2Tag.text()).toEqual("About Me");
  });

  it("includes biograpy text", () => {
    const pTag = shallow(<About />).find("p");
    expect(pTag.text()).toContain("Born in Tokyo, Japan in 1991.");
  });
});
