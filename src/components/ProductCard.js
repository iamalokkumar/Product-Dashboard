// src/components/ProductCard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../features/products/favoritesSlice';
import { Link } from 'react-router-dom';
import Toast from './Toast';
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

const Button = styled.button`
   background: ${props => (props.disabled ? '#ccc' : '#007bff')};
  border: none;
  padding: 10px;
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 6px;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: ${props => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;

const ProductCard = ({ product }) => {
      const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
  const isFavorited = favorites.some(item => item.id === product.id);
 const handleAddFavorite = () => {
    dispatch(addFavorite(product));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };
  return (
    <Card>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Image src={product.image} alt={product.title} />
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
      </Link>
      <Button onClick={() =>{ dispatch(addFavorite(product)); handleAddFavorite()}}  disabled={isFavorited}>{isFavorited ? 'Favorited ✅' : 'Add to Favorites'}</Button>
       {showToast && <Toast message="Added to Favorites ✅" />}
    </Card>
  );
};

export default ProductCard;
