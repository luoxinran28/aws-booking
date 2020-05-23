import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Products from './products'

test("We should see two buttons exist.", () => {   
  const { getByText } = render(<Products />);
  
});

// test("Delete buttons", () => {   
//   const { getByText } = render(<Products />);
//   const originalSize = screen.queryAllByTestId("product-item").length;
//   fireEvent.click(getByText(/Delete/i));
//   const deletedSize = screen.queryAllByTestId("product-item").length;
//   console.log(originalSize, deletedSize);
//   expect(originalSize - deletedSize).toBe(1);
// });