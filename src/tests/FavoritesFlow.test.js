import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { addFavorite, removeFavorite } from '../features/products/favoritesSlice';

test('can add and remove favorite', () => {
  const product = { id: 42, title: 'Fav Product' };

  store.dispatch(addFavorite(product));
  let state = store.getState().favorites;
  expect(state).toHaveLength(1);

  store.dispatch(removeFavorite(42));
  state = store.getState().favorites;
  expect(state).toHaveLength(0);
});
