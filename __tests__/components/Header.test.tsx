import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Header from "./../../src/components/Header";

configure({ adapter: new Adapter() });

describe("Header", () => {
  const header = shallow(<Header />);

  it("renders without crashing", () => {
    header;
  });
});
