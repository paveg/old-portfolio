import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import About from "./../../../src/containers/About/About";

configure({ adapter: new Adapter() });

describe("About", () => {
  it("renders without crashing", () => {
    shallow(<About />);
  });
});
