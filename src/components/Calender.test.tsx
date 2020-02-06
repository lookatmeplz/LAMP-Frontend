import React from 'react';
import { render } from '@testing-library/react';
import Calender from './Calender';

test('renders h2', () => {
  const { getByText } = render(<Calender />);
  const linkElement1 = getByText(/년/i);
  const linkElement2 = getByText(/월/i);
  const linkElement3 = getByText(/일/i);

  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});

test('renders h4', () => {
  const { getByText } = render(<Calender />);
  const linkElement1 = getByText(/시/i);
  const linkElement2 = getByText(/분/i);
  const linkElement3 = getByText(/초/i);

  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});
