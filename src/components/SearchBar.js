import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchTerm } from '../features/products/productsSlice';
const Input = styled.input`
  width: 98%;
  padding: 12px 16px ;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  background-color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.15);
  }

  &::placeholder {
    color: #999;
  }
`;


const SearchBar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearchTerm(value));
    }, 300);
    return () => clearTimeout(timeout);
  }, [value, dispatch]);

  return <Input type="text" placeholder="Search by title..." value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default SearchBar;
