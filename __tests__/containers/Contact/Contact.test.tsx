import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Contact from "./../../../src/containers/Contact/Contact";

configure({ adapter: new Adapter() });

describe("Contact", () => {
  it("renders without crashing", () => {
    shallow(<Contact />);
  });
});
