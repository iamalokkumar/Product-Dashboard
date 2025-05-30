import productsReducer, {
  setSearchTerm,
  setCategory,
  setSort,
} from '../features/products/productsSlice';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  searchTerm: '',
  category: 'all',
  sort: 'none',
};

test('should handle initial state', () => {
  expect(productsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
});

test('should update searchTerm', () => {
  const state = productsReducer(initialState, setSearchTerm('shoes'));
  expect(state.searchTerm).toBe('shoes');
});

test('should update category', () => {
  const state = productsReducer(initialState, setCategory('electronics'));
  expect(state.category).toBe('electronics');
});

test('should update sort', () => {
  const state = productsReducer(initialState, setSort('asc'));
  expect(state.sort).toBe('asc');
});
