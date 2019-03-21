import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import App from "./../src/App";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});
