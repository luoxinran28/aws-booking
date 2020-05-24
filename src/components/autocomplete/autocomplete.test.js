import React from 'react';
import { render } from '@testing-library/react';
import Autocomplete from './autocomplete';

const searchValue = "b";
const options = ["apple", "book", "beauty", "bear", "cat", "cafe"];

test('should show the dropdown option list by the given search value.', () => {
  const { container } = render(<Autocomplete searchValue={searchValue} options={options} />);
  expect(container.querySelector("option")).toBeVisible();
})
