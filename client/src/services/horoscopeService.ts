
// src/services/horoscopeService.ts
export const fetchHoroscope = async () => {
  const min = 1;
  const max = 20;
  const uniqueNumbers: number[] = [];

  while (uniqueNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  const response = await fetch(`https://ygaoin91tg.execute-api.ap-southeast-2.amazonaws.com/dev/fetch-horoscope?numbers=${uniqueNumbers.join(',')}`);

  if (!response.ok) {
    throw new Error('Failed to fetch horoscope');
  }
  const data = await response.json();
  return data;
};