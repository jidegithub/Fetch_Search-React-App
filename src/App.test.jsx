//App.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('that a button exist', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('count-button');
    expect(button).toBeInTheDocument();
  });
});


// Counter.test.jsx

import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

//test block
test("increments counter", () => {
  // render the component on virtual dom
  render(<Counter />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  //interact with those elements
  fireEvent.click(incrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("1");
});