import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #21a1f1;
  }
`;

interface GenerateButtonProps {
  onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Generate Horoscope</Button>;
};

export default GenerateButton;
