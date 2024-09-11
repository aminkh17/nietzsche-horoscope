import { useState } from 'react';
import styled from 'styled-components';
import ErrorNotification from './components/ErrorNotification';
import GenerateButton from './components/GenerateButton';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ResultDisplay from './components/ResultDisplay';
import { fetchHoroscope as defaultFetchHoroscope } from './services/horoscopeService';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  # add full desktop responsive styling
  text-align: center;
  padding: 20px;
  max-width: 800px; /* add a max-width to prevent excessive width */
  margin: 0 auto; /* center the container horizontally */

  /* add media queries for different screen sizes */
  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }

`;

interface AppProps {
  fetchHoroscope?: () => Promise<any>;
}

function App({ fetchHoroscope = defaultFetchHoroscope }: AppProps) {
  const [horoscope, setHoroscope] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchHoroscope  = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHoroscope();
      setHoroscope(data);
    } catch (err) {
      setError('Failed to fetch horoscope data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Header />
      <GenerateButton onClick={handleFetchHoroscope } />
      {loading && <LoadingSpinner />}
      {error && <ErrorNotification message={error} />}
      {horoscope.length > 0 && <ResultDisplay results={horoscope} />}
    </AppContainer>
  );
};

export default App;
