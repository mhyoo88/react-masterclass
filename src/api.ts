const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string | undefined) {
  // coinId 가 정의 되지 않앗기 때문에 fetchCoinInfo의 인자로 coinId라는 이름의 string을 넘겨준다.
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000); //now
  const startDate = endDate - 60 * 60 * 24 * 7; // (60초 * 60분 * 24시간 * 7일)from now to a week ago
  return fetch(
    // `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}?start=${startDate}&end=${endDate}`
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
