import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #f9f9f9;
  margin-top: 40px;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: left;
  width: 80%;

  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 17px;
    right: 0;
    width: 100px;
    min-height: 100px;
    background-image: url('/MeUThen-vague.svg');
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain; 
    transform-origin: 50% 60%;
    transform: ${props => `rotate(${props.rotate}deg)`};
  }
  



    /* add media queries for different screen sizes */
  @media (max-width: 768px) {
   
  }

  @media (max-width: 480px) {
    
  }
`

interface ResultDisplayProps {
  results: Array<{ en: string; fa: string; tr: string; ar: string }>;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
  return (
    <ResultContainer>
      {results.map((result, index) => (
        <ItemContainer key={index} rotate={(index) * 120}>
          <ReactMarkdown>{result.en}</ReactMarkdown>
          <ReactMarkdown>{result.fa}</ReactMarkdown>
          <ReactMarkdown>{result.tr}</ReactMarkdown>
          <ReactMarkdown>{result.ar}</ReactMarkdown>
        </ItemContainer>
      ))}
    </ResultContainer>
  );
};

export default ResultDisplay;
