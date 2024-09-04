import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Nietzsche Horoscope</Title>
    </StyledHeader>
  );
};

export default Header;
