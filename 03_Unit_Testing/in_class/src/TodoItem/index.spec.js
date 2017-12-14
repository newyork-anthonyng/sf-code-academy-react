import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import TodoItem from "./";

Enzyme.configure({ adapter: new Adapter() });

// Add new tests here
it("should return true", function() {
  expect(true).toEqual(true);
});

const array = [
  { name: "The Dark Knight", rating: 7, ageRating: 12 },
  { name: "Up", rating: 10, ageRating: 14 },
];

it("should have correct movie", function() {
  expect(array).toMatchSnapshot();
});

const defaultProps = {
  completed: false,
  onClick: function() {},
  text: "Walk dog",
  index: 42
};

it("should render correctly when completed", function() {
  const wrapper = shallow(
    <TodoItem {...defaultProps} completed={true} />
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("should render correctly when not completed", function() {
  const wrapper = shallow(
    <TodoItem {...defaultProps} />
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
  expect({ foo: "bar" }).toMatchSnapshot();
});

it("should run callback when clicked", function() {
  const cb = jest.fn();
  const wrapper = shallow(
    <TodoItem {...defaultProps} onClick={cb} />
  );

  var listItemEl = wrapper.find("li");
  listItemEl.simulate("click");

  expect(cb).toHaveBeenCalledTimes(1);
  cb(42);
  cb(52, 11);
  expect(cb.mock.calls).toMatchSnapshot();
});
