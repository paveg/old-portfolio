import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import BigAvatar from "./../../src/components/BigAvatar";

configure({ adapter: new Adapter() });

describe("BigAvatar", () => {
  it("renders without crashing", () => {
    shallow(<BigAvatar />);
  });
  const avatarImage = shallow(<BigAvatar />);

  it("is a element.", () => {
    expect(avatarImage.length).toBe(1);
  });
});
