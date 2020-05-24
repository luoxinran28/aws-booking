import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './pagination'

test("Pagination should have at least one button shows 1", () => { 
  const { getByText } = render(<Pagination />);
  expect(getByText("1")).toBeInTheDocument();
});
