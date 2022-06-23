import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import App from './App';

test('App loads', () => {
  render(<App/>);
  expect(screen.getByRole('button', {name: 'Get suggestions'})).toBeInTheDocument();
});

//////////This works!
