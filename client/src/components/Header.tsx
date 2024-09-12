import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #282c34;
  padding: 20px 0 20px 0;
  text-align: center;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-image: url('/vite.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const Title = styled.h1`
  font-size: 1.7rem;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Thus Spoke Zarathustra</Title>
    </StyledHeader>
  );
};

export default Header;
