import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import TodoList from "./";

Enzyme.configure({ adapter: new Adapter() });

// Add new tests here
it("should return true", function() {
  expect(true).toEqual(true);
});

const defaultProps = {
  todoItems: [
    { text: "One", completed: true },
    { text: "Two", completed: true },
  ],
  onTodoItemClick: function() {}
};

it("should render correctly with todoItems", function() {
  const wrapper = shallow(
    <TodoList {...defaultProps} />
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("should render correctly when todoItems is undefined", function() {
  const wrapper = shallow(
    <TodoList {...defaultProps} todoItems={undefined} />
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});
