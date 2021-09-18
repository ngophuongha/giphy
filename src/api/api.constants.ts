export const TRENDING_API_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/trending`;
export const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;
export const LIMIT_ITEMS = 20;
export const GET_20_ITEMS_PER_OFFSET_API_ENDPOINT = `${TRENDING_API_ENDPOINT}${API_KEY}&limit=${LIMIT_ITEMS}`;
