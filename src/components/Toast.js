import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #28a745;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fadeInOut 2.5s ease-in-out forwards;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    10% { opacity: 1; transform: translateX(-50%) translateY(0); }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  }
`;

const Toast = ({ message }) => {
  return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
