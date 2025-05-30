import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import SearchBar from '../components/SearchBar';

test('search input updates value', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/search by title/i);
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});
