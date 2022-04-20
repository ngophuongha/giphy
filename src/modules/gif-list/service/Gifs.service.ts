import { GifsResponseProps } from "./Gifs.service.type";
import * as apiConstants from "../../../api/api.constants";
import apiWrapper from "../../../api/api.wrapper";
import { LIMIT_ITEMS } from "../../../constants/variables";

export const getGifItems = async (
  offset: number
): Promise<GifsResponseProps[]> => {
  try {
    const response = await apiWrapper<{ data: GifsResponseProps[] }>({
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
