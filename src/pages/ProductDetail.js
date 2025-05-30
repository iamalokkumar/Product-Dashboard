
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../features/products/favoritesSlice';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const ProductImage = styled.img`
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #007bff;
  border: none;
  padding: 12px 24px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 16px;

  &:hover {
    background: #0056b3;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  font-size: 24px;
  border: none;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === Number(id))
  );

  if (!product) return <p>Product not found</p>;

  const handleAddFavorite = () => {
    dispatch(addFavorite(product));
    navigate('/favorites')
  };

 return (
  <Wrapper>
    <CloseButton onClick={() => navigate('/')}>×</CloseButton>

    <Container>
      <h1>{product.title}</h1>
      <ProductImage src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Button onClick={handleAddFavorite}>Add to Favorites</Button>
    </Container>
  </Wrapper>
);
};

export default ProductDetail;
