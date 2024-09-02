import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GenerateButton from './components/GenerateButton';
import ResultDisplay from './components/ResultDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorNotification from './components/ErrorNotification';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const App: React.FC = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHoroscope = async () => {
    setLoading(true);
    setError(null);
    try {
      const randomNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1);
      const response = await fetch(`https://ygaoin91tg.execute-api.ap-southeast-2.amazonaws.com/dev/fetch-horoscope?numbers=${randomNumbers.join(',')}`);
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('Failed to fetch horoscope data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Header />
      <GenerateButton onClick={fetchHoroscope} />
      {loading && <LoadingSpinner />}
      {error && <ErrorNotification message={error} />}
      {results.length > 0 && <ResultDisplay results={results} />}
    </AppContainer>
  );
};

export default App;
