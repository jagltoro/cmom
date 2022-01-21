const API_URL = `https://api.coingecko.com/api/v3/coins/markets`;

export interface MarketInterface {
  id: number;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

export const markets = async (
  page: number,
  currency = "eur",
  perPage = 10
): Promise<any> => {
  const response = await fetch(
    `${API_URL}?vs_currency=${currency}&per_page=${perPage}&page=${page}`
  );
  const returnData = await response.json();
  return returnData;
};
