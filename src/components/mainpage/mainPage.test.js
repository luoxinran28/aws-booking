import React from "react"
import { render, fireEvent, screen } from '@testing-library/react';
import MainPage from './mainPage';

test("Mainpage should have main tag.", () => { 
  const { container } = render(<MainPage />);
  expect(container.querySelector("main")).toBeTruthy;
});

test("Mainpage should have container class.", () => { 
  const { container } = render(<MainPage />);
  expect(container.querySelector(".container")).toBeTruthy;
});