import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #f9f9f9;
`;

const ItemContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
`;

interface ResultDisplayProps {
  results: Array<{ first_paragraph: string; toPersian: string; toTurkish: string; toArabic: string }>;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
  return (
    <ResultContainer>
      {results.map((result, index) => (
        <ItemContainer key={index}>
          <Paragraph>{result.first_paragraph}</Paragraph>
          <Paragraph>{result.toPersian}</Paragraph>
          <Paragraph>{result.toTurkish}</Paragraph>
          <Paragraph>{result.toArabic}</Paragraph>
        </ItemContainer>
      ))}
    </ResultContainer>
  );
};

export default ResultDisplay;
