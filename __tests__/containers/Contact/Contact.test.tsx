import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Contact from "./../../../src/containers/Contact/Contact";

configure({ adapter: new Adapter() });

describe("Contact", () => {
  it("renders without crashing", () => {
    shallow(<Contact />);
  });

  it("equals h2 text", () => {
    const h2Tag = shallow(<Contact />).find("h2");
    expect(h2Tag.text()).toEqual("Contact");
  });
});
