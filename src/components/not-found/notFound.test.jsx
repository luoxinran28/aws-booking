import React from "react"
import { render, fireEvent, screen } from '@testing-library/react';
import NotFound from './notFound';

test("Should see Not Found text", () => { 
  const { getByText } = render(<NotFound />);
  expect(getByText(/Not Found/i)).toBeInTheDocument;
});