import { GifRequestProps } from "./Gifs.service.type";
import * as apiConstants from "../../../api/api.constants";
import apiWrapper from "../../../api/api.wrapper";
import { LIMIT_ITEMS } from "../../../constants/variables";

export const getGifItems: GifRequestProps = async (offset: number) => {
  try {
    const response = await apiWrapper({
      url: `${apiConstants.TRENDING_API_ENDPOINT}`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        limit: LIMIT_ITEMS,
        offset: offset,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};
