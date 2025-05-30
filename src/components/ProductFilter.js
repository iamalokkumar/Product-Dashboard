import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCategory, setSort } from '../features/products/productsSlice';

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
`;

const Select = styled.select`
  padding: 10px 14px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.15);
  }

  option {
    background: white;
  }
`;


const ProductFilter = () => {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <Select onChange={(e) => dispatch(setCategory(e.target.value))}>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </Select>

      <Select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="none">Sort By</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </Select>
    </FilterWrapper>
  );
};

export default ProductFilter;
