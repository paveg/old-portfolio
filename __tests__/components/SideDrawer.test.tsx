import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import SideDrawer from "./../../src/components/SideDrawer";

configure({ adapter: new Adapter() });

describe("SideDrawer", () => {
  const sideDrawer = shallow(<SideDrawer />);

  it("renders without crashing", () => {
    sideDrawer;
  });
});
