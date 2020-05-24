import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultList from './resultList'

var results = [
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Alexa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Electronics" },
    numberInStock: 7,
    rating: 4.5
  }
];
test("The result list should contain some cards", () => { 
  const { container } = render(<ResultList results={results} />);
  expect(container.querySelector(".card")).toBeInTheDocument();
});
