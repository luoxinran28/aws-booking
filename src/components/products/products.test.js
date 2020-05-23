import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Products from './products'

test("We should see product cards have been displayed.", () => {   
  const { getAllByTestId, container } = render(<Products />);
  console.log(container.querySelector(".card"));
  expect(container.querySelector(".card")).toBeInTheDocument();
});

// test("Delete buttons", () => {   
//   const { getByText } = render(<Products />);
//   const originalSize = screen.queryAllByTestId("product-item").length;
//   fireEvent.click(getByText(/Delete/i));
//   const deletedSize = screen.queryAllByTestId("product-item").length;
//   console.log(originalSize, deletedSize);
//   expect(originalSize - deletedSize).toBe(1);
// });