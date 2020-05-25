import React, { Component } from 'react';
import { render } from '@testing-library/react';
import SearchBox from './searchBox';

test("There should be an input in search box", () => {
  const { container } = render(<SearchBox options={["test"]}/>);
  expect(container.querySelector("input")).toBeInTheDocument();
});

test("There should be an search button in search box", () => {
  const { getByText } = render(<SearchBox options={["test"]}/>);
  expect(getByText(/Search/i)).toBeInTheDocument();
});

test("There should be an reset button in search box", () => {
  const { getByText } = render(<SearchBox options={["test"]}/>);
  expect(getByText(/Reset/i)).toBeInTheDocument();
});