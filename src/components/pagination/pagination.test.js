import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './pagination'

const totalCount = 3;
const pageSize = 3;
const currentPage = 1;
test("Pagination should have at least one button shows 1", () => { 
  
  const { getByText } = render(<Pagination
    itemsAmount={totalCount}
    pageSize={pageSize}
    currentPage={currentPage}/>);
  expect(getByText("1")).toBeInTheDocument();
});
