import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ResultContainer = styled.div`
  background-color: #f9f9f9;
  margin-top: 20px;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

interface ResultDisplayProps {
  results: Array<{ en: string; fa: string; tr: string; ar: string }>;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
  return (
    <ResultContainer>
      {results.map((result, index) => (
        <ItemContainer key={index}>
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
