import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ProductFilter from '../components/ProductFilter';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Home = () => {
  const { items, status, searchTerm, category, sort } = useSelector(state => state.products);

  let filtered = items
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => category === 'all' || p.category === category);

  if (sort === 'asc') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'desc') filtered.sort((a, b) => b.price - a.price);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load products.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <SearchBar />
      <ProductFilter />
      <Grid>
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </Grid>
    </div>
  );
};

export default Home;
