import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';

// Styled nav container
const Nav = styled.nav`
  padding: 1rem;
  background: #eee;
  display: flex;
  gap: 20px;
`;

// Styled NavLink with active underline
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 2px solid #007bff;
    font-weight: bold;
    color: #007bff;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyle />
      <Nav>
        <StyledNavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
          Favorites
        </StyledNavLink>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
