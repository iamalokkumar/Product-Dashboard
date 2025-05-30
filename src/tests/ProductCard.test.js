import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ProductCard from '../components/ProductCard';

const product = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  image: 'https://example.com/image.jpg',
};

test('renders ProductCard with title and price', () => {
  render(
    <Provider store={store}>
      <ProductCard product={product} />
    </Provider>
  );

  expect(screen.getByText(/Test Product/)).toBeInTheDocument();
  expect(screen.getByText(/\$99\.99/)).toBeInTheDocument();
});
