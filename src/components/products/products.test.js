import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Products from './products'

test("We should see pagination", () => {   
  const { container } = render(<Products />);
  expect(container.querySelector(".pagination")).toBeInTheDocument();
});

test("We should see result list", () => {   
  const { container } = render(<Products />);
  expect(container.querySelector(".result-list")).toBeInTheDocument();
});

// test("Delete buttons", () => {   
//   const { getByText } = render(<Products />);
//   const originalSize = screen.queryAllByTestId("product-item").length;
//   fireEvent.click(getByText(/Delete/i));
//   const deletedSize = screen.queryAllByTestId("product-item").length;
//   console.log(originalSize, deletedSize);
//   expect(originalSize - deletedSize).toBe(1);
// });