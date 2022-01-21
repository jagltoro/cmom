const API_URL = `https://api.coingecko.com/api/v3/coins`;

export const markets = async (
  page: number,
  currency = "eur",
  perPage = 10
): Promise<any> => {
  const response = await fetch(
    `${API_URL}/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`
  );
  const returnData = await response.json();
  return returnData;
};

export const details = async (id: string): Promise<any> => {
  const response = await fetch(`${API_URL}/${id}`);
  const returnData = await response.json();
  return returnData;
};
