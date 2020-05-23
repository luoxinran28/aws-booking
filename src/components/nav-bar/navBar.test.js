import React from "react"
import { render, fireEvent, screen } from '@testing-library/react';
import NavBar from './navBar';

test("Navigator bar is loaded.", () => { 
  const { getByText } = render(<NavBar />);
  expect(getByText(/Home/i)).toBeInTheDocument();
});