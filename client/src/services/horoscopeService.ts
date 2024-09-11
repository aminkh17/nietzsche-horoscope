
const Endpoint = "https://ygaoin91tg.execute-api.ap-southeast-2.amazonaws.com/dev/fetch-horoscope";
// src/services/horoscopeService.ts
export const fetchHoroscope = async () => {
  
  // fetch http options call to endpoint
  const initialResponse = await fetch(Endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const initialData = await initialResponse.json();
  console.log(initialData.range);

  const min = 1;
  const max = initialData.range - 1;
  const uniqueNumbers: number[] = [];

  while (uniqueNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  const response = await fetch(`${Endpoint}?numbers=${uniqueNumbers.join(',')}`);

  if (!response.ok) {
    throw new Error('Failed to fetch horoscope');
  }
  const data = await response.json();
  return data;
};