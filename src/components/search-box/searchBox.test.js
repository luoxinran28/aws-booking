import React, { Component } from 'react';
import { render } from '@testing-library/react';
import SearchBox from './searchBox';

test("There should be an input in search box", () => {
  const { container } = render(<SearchBox />);
  expect(container.querySelector("input")).toBeInTheDocument();
});

test("There should be an search button in search box", () => {
  const { getByText } = render(<SearchBox />);
  expect(getByText(/Search/i)).toBeInTheDocument();
});

test("There should be an reset button in search box", () => {
  const { getByText } = render(<SearchBox />);
  expect(getByText(/Reset/i)).toBeInTheDocument();
});