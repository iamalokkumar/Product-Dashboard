import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/products/favoritesSlice';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  padding: 1rem;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #f0f0f0;
  transition: transform 0.3s;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 8px;
  height: 48px;
  overflow: hidden;
`;

const Price = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const RemoveButton = styled.button`
  margin-top: 10px;
  background: #dc3545;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;

  &:hover {
    background: #a71d2a;
  }
`;

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <p style={{ padding: '1rem' }}>No favorites added yet.</p>;
  }

  return (
    <GridWrapper>
      {favorites.map((product) => (
        <Card key={product.id}>
          <Title>{product.title}</Title>
          <Image src={product.image} alt={product.title} />
          <Price>${product.price}</Price>
          <RemoveButton onClick={() => dispatch(removeFavorite(product.id))}>Remove</RemoveButton>
        </Card>
      ))}
    </GridWrapper>
  );
};

export default Favorites;
