import axios from "axios";
import { GifRequestProps } from "./Gifs.service.type";

const API_KEY = "ux5wPH7JfoTG6lzjq6gNYzQIVRS876WI";
const API_ENDPOINT = `https://api.giphy.com/v1/gifs/trending`;
const BASE_URL = `${API_ENDPOINT}?api_key=${API_KEY}`;
const LIMIT_ITEMS = 20;
const GET_ITEMS_PER_OFFSET = `${BASE_URL}&limit=${LIMIT_ITEMS}`;

export const getGifItems: GifRequestProps = async (offset: number) => {
  console.log('offset: ', offset);
  try {
    const response = await axios.get(
      `${GET_ITEMS_PER_OFFSET}&offset=${offset}`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(new Error("Something went wrong"));
  }
};
