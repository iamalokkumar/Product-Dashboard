import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from '../features/products/favoritesSlice';

const sampleProduct = { id: 1, title: 'Test Product' };

test('should add a product to favorites', () => {
  const state = favoritesReducer([], addFavorite(sampleProduct));
  expect(state).toHaveLength(1);
  expect(state[0]).toEqual(sampleProduct);
});

test('should not duplicate favorites', () => {
  const state = favoritesReducer([sampleProduct], addFavorite(sampleProduct));
  expect(state).toHaveLength(1);
});

test('should remove a product from favorites', () => {
  const state = favoritesReducer([sampleProduct], removeFavorite(1));
  expect(state).toHaveLength(0);
});
