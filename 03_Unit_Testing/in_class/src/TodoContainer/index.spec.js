import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import TodoItemContainer from "./";

Enzyme.configure({ adapter: new Adapter() });

// Add new tests here
it("should return true", function() {
  expect(true).toEqual(true);
});

it("should toggle the completed state of a TodoItem when I click on the TodoItem", () => {
  const wrapper = mount(<TodoItemContainer />);

  const listElement = wrapper.find("li").at(0);
  listElement.simulate("click");

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("should input element when I type in it", () => {
  const wrapper = shallow(<TodoItemContainer />);

  const inputElement = wrapper.find("input");
  inputElement.simulate("change", { target: { value: "Expedia" }});

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("should add a new todo item when I click on the button", () => {
  const wrapper = shallow(<TodoItemContainer />);

  const inputElement = wrapper.find("input");
  inputElement.simulate("change", { target: { value: "Expedia" }});

  const buttonElement = wrapper.find("button");
  buttonElement.simulate("click");

  expect(toJSON(wrapper)).toMatchSnapshot();
});
