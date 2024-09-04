import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: linear-gradient(145deg, #FFD700, #FFC700, #FFB700);
    border: 1px solid #DAA520;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #FFD700;
     background: linear-gradient(145deg, #FFC700, #FFD700, #FFB700);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    color: black;
  }
`;

interface GenerateButtonProps {
  onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  const [buttonText, setButtonText] = useState('Heavily Thoughts');
  
  const handleOnMouseOver = () => {
    setButtonText('Unveil Wisdom');
  };
  
  const handleOnMouseOut = () => {
    setButtonText('Heavily Thoughts');
  };
  
  return <Button onClick={onClick} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>{buttonText}</Button>;
};

export default GenerateButton;
