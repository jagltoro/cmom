export interface MarketInterface {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

export interface DetailsInterface {
  name: string;
  image: {
    large: string;
  };
  symbol: string;
  hashing_algorithm: string;
  description: {
    en: string;
  };
  links: {
    homepage: string[];
  };
  genesis_date: string;
  market_data: {
    market_cap: {
      eur: number;
    };
  };
}
