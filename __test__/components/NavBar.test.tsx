import React from "react";
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from "../../components/NavBar";

configure({adapter: new Adapter()});


describe("NavBar", () => {
  it("should find the navbar component", () => {
    const wrapper = mount(<NavBar />);
    const navbar = wrapper.find(".navbar");
    expect(navbar.length).toEqual(1);
  });

  test("should render the correct text", () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find(".sr-only").text()).toEqual("Search");
  });

  //test for the search bar button
  test("should find the button", () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find("button").length).toEqual(1);
  });

  //test button click
  test("test the button click", () => {
    const wrapper = mount(<NavBar />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("button").length).toEqual(1);
  });

  test("should render the correct click action on input", () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find("input").length).toEqual(1);
    wrapper.find("input").simulate("click", { target: { value: "test" } });
    expect(wrapper.find("input").length).toEqual(1);
  });
});


