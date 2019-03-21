import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import BigAvatar from "./../../src/components/BigAvatar";

configure({ adapter: new Adapter() });

describe("BigAvatar", () => {
  const avatarImage = shallow(<BigAvatar />);

  it("renders without crashing", () => {
    avatarImage;
  });

  it("is a element.", () => {
    expect(avatarImage.length).toBe(1);
  });
});
