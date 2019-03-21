import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Avatar from "./../../src/components/Avatar";

configure({ adapter: new Adapter() });

describe("Avatar", () => {
  const avatarImage = shallow(<Avatar />);

  it("renders without crashing", () => {
    avatarImage;
  });

  it("is a element.", () => {
    expect(avatarImage.length).toBe(1);
  });
});
