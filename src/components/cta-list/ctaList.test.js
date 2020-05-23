import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import CTAList from './ctaList'


afterEach(cleanup);

test("We should see two buttons exist.", () => {   
  const { getByText } = render(<CTAList />);
  expect(getByText(/More Info/i)).toBeInTheDocument();
  expect(getByText(/Delete/i)).toBeInTheDocument();
});
