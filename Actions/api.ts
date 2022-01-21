const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

export interface MarketInterface {
  id: number;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  high_price: number;
  low_price: number;
}

export const markets = async (): Promise<any> => {
  const response = await fetch(`${API_URL}/markets`);
  const returnData = await response.json();
  return returnData;
};
