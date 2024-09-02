import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #61dafb;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Nietzsche Horoscope</Title>
    </StyledHeader>
  );
};

export default Header;
